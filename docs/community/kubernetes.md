# Kubernetes

_Contributor: [@kdwils](https://github.com/kdwils)_.

## Use Case
Simple Authentication for Kubernetes ingress controllers for securing both internal and externally exposed self-hosted apps.
Ingress controllers like `ingress-nginx` or `traefik` can act as a gateway to enforce authentication and authorization policies before traffic reaches your self-hosted applications. 

This is useful for protecting internal tools, admin interfaces, or services exposed to the internet, without needing to modify the applications themselves.

## Prerequisites

This documentation assumes the following prerequisites:

* An operational Kubernetes cluster
* An Ingress controller installed for the Ingress section. This documentation demonstrates using `ingress-nginx`, but `traefik` could be used as well.

## Deploying Tinyauth to a Kubernetes Environment

### 1. Create a Namespace
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: tinyauth
```

### 2. Create a secret

First, [generate a secret key](../getting-started.md#installation) based on the installation instructions.

Next, base64 encode the generated secret key, replacing `'your-generated-secret'` with the actual generated secret, using the following command:
```sh
echo -n 'your-generated-secret' | base64
```

Create the secret to store the base64 encoded key:

```yaml
apiVersion: v1
data:
  secretKey: <your base64 encoded key>
kind: Secret
metadata:
  name: tinyauth
  namespace: tinyauth
type: Opaque
```

### 3. Create a Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tinyauth
  labels:
    app: tinyauth
spec:
  replicas: 1
  selector:
    matchLabels:
      app: tinyauth
  template:
    metadata:
      labels:
        app: tinyauth
    spec:
      containers:
        - name: tinyauth
          image: ghcr.io/steveiliop56/tinyauth:v3
          ports:
            - containerPort: 3000
          env:
            - name: APP_URL
              value: "http://auth.example.com"
            - name: SECRET
              valueFrom:
                secretKeyRef:
                  name: tinyauth # Reference the secret created earlier
                  key: secretKey
          livenessProbe:
            httpGet:
              path: /api/healthcheck
              port: 3000
          readinessProbe:
            httpGet:
              path: /api/healthcheck
              port: 3000
```

### 4. Create a Service
```yaml
apiVersion: v1
kind: Service
metadata:
  name: tinyauth
spec:
  selector:
    app: tinyauth
  ports:
    - port: 3000
      targetPort: 3000
  type: ClusterIP
```

## Ingress Example with ingres-nginx controller

This ingress resource configures `ingress-nginx` to forward authentication checks for the host `my-host.domain.com` to a specific URL (`auth-url`). If the user is not authenticated, they will be redirected to a login page (`auth-signin`).

Documentation for these annotations can be found in the ingress-nginx repository [annotations.md](https://github.com/kubernetes/ingress-nginx/blob/main/docs/user-guide/nginx-configuration/annotations.md#annotations).

- `nginx.ingress.kubernetes.io/auth-url` specifies the URL where `ingress-nginx` should send requests to verify if the user is authenticated.

- `nginx.ingress.kubernetes.io/auth-signin` specifies the URL where `ingress-nginx` should send unauthenticated users to sign in.

- `nginx.ingress.kubernetes.io/auth-signin-redirect-param` specifies the key of the query parameter used to set the redirect URI.


> [!NOTE]
> This example uses the `<my-service>.<my-namespace>.svc.cluster.local` in-cluster uri based on the above example for the `auth-url`.
>
> The `auth-signin` annotation should be a reference to a uri that is accessible to the user.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
  namespace: my-namespace
  annotations:
    nginx.ingress.kubernetes.io/auth-url: "http://tinyauth.tinyauth.svc.cluster.local:3000/api/auth/nginx"
    nginx.ingress.kubernetes.io/auth-signin: "http://auth.example.com/login"
    nginx.ingress.kubernetes.io/auth-signin-redirect-param: redirect_uri
spec:
  ingressClassName: nginx
  rules:
    - host: my-host.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: my-service
                port:
                  number: 8080
```