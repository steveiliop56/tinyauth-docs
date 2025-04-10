# Kubernetes

_Contributor: [@kdwils](https://github.com/kdwils)_.

## Prerequisites

This documentation assumes the following prerequisites:

* An operational Kubernetes cluster
* An Ingress controller installed. This documentation demonstrates using `ingress-nginx`, but `traefik` could be used as well.

## Deploying Tinyauth to a Kubernetes Environment

### 1. Create a Namespace
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: tinyauth
```

### 2. Create a secret

First, [generate secret key](#hidden-anchor).

Next, base64 encode the generated secret key with the following command:
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

### 3. Create a deployment

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

### 4. Create a service
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

# Ingress-nginx Controller Example

This ingress resource configures `ingress-nginx` to forward authentication checks for the host `my-host.domain.com` to a specific URL (`auth-url`). If the user is not authenticated, they will be redirected to a login page (`auth-signin`).

The annotation `nginx.ingress.kubernetes.io/auth-url` specifies the URL where `ingress-nginx` should send requests to verify if the user is authenticated.

The annotation `nginx.ingress.kubernetes.io/auth-signin` defines the URL where `ingress-nginx` should send unauthenticated users to sign in.

> [!NOTE]
> This example uses the in-cluster `<my-service>.<my-namespace>.svc.cluster.local` hostname for the tinauth deployment based on the above example. 

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
  namespace: my-namespace
  annotations:
    nginx.ingress.kubernetes.io/auth-url: "http://tinyauth.tinyauth.svc.cluster.local:3000/api/auth/nginx"
    nginx.ingress.kubernetes.io/auth-signin: "http://tinyauth.tinyauth.svc.cluster.local:3000/login?redirect_uri=<my-redirect-uri>"
spec:
  ingressClassName: nginx
  rules:
    - host: my-host.domain.com
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