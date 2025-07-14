# Using LDAP for user management

Even though LDAP can be considered a protocol used by businesses, it can be really helpful in centralizing user management in a homelab environment too. This is why Tinyauth supports LDAP as a source for users. Let's see how you can set it up.

## Requirements

To proceed with this guide you will need to have an LDAP server, my recommendation is [LLDAP](https://github.com/lldap/lldap) as it's very lightweight and easy to configure. We are going to use LLDAP for this guide but any LDAP server is compatible.

## Creating the users

In order for Tinyauth to work we need two (or more users). The first one will be our observer user which will have read only access in our database and it will be used by Tinyauth itself to search for the DN of the user that's trying to login. The second user will just be a normal user used to login to Tinyauth and to our apps.

To create your observer user go to the **Users** tab in LLDAP and click **Create a user**. There provide a username, a password and an email address. Then click **Submit**.

![LLDAP Create a User](/screenshots/lldap-create-user.png)

After your user is created click in the list and scroll all the way down to the group memberships section. From the group list you need to select the `lldap_strict_readonly` group and click **Add to Group**.

![LLDAP Groups](/screenshots/lldap-groups.png)

Now that we have the observer user we can repeat this process to create another use that does not need to be in any groups.

## Configuring Tinyauth

Now it's time to configure Tinyauth to connect to the LDAP server, this can be done by adding the following environment variables to the Tinyauth docker container:

```yaml
environment:
  - LDAP_ADDRESS=ldap://my-lldap-server:3890
  - LDAP_BIND_DN=uid=your-observer-user,ou=people,dc=example,dc=com
  - LDAP_BIND_PASSWORD=your-observer-user-password
  - LDAP_BASE_DN=dc=example,dc=com
  - LDAP_SEARCH_FILTER=(uid=%s)
  - LDAP_INSECURE=true
```

:::info
You can customize the search filter to your needs, this base one will search users based on their UID. The `%s` value will be replaced by the username of the user that's trying to login.
:::

:::info
Make sure to replace the bind DN and base DN with the values of your own configuration.
:::

After restarting, you should be able to login to Tinyauth with the second user you created in LLDAP. You can create as many users as you like and use them to login.

:::info
There is no indication in the UI that a user is logged in via LDAP since it's treated exactly the same as a user from a file or from environment variables. All access controls apply the same way as they would apply with normal users.
:::
