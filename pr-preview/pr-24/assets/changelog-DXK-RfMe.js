import{j as e}from"./index-BDrdAJGi.js";let s={title:"Changelog",description:"Overview of changes and updates in Tinyauth versions."},o=[{href:"https://crowdin.com/project/tinyauth"}],a={contents:[{heading:"improvements",content:"Try to reconnect to LDAP server if heartbeat fails"},{heading:"improvements",content:"Handle string type for the groups claim in the generic OAuth provider"},{heading:"improvements",content:"Forward basic auth header to protected apps"},{heading:"improvements",content:"Internationalize the required and invalid input errors"},{heading:"improvements",content:"Add auto complete information to auth forms"},{heading:"improvements",content:"Move healthcheck and favicon requests to debug logs"},{heading:"fixes",content:"Don't fail app if LDAP fails to start but other user sources are configured"},{heading:"technical",content:"Update dependencies"},{heading:"technical",content:"Update translations"},{heading:"improvements-1",content:"Use heartbeat to prevent LDAP server from timing out"},{heading:"fixes-1",content:"Fix the password message not being translated"},{heading:"technical-1",content:"Update translations"},{heading:"technical-1",content:"Update dependencies"},{heading:"technical-1",content:"Clean up comments in codebase"},{heading:"new-features",content:"Support for completely disabling Tinyauth authentication for specific IPs or CIDRs using the tinyauth.ip.bypass label"},{heading:"fixes-2",content:"Fix the label discovery"},{heading:"technical-2",content:"Update translations"},{heading:"new-features-1",content:"Add label to select app based on the its domain eliminating the need for keeping the container name the same as the app domain"},{heading:"new-features-1",content:"Support for logging in to a protected app using basic auth"},{heading:"new-features-1",content:"Support for allowing/blocking IP addresses and/or CIDRs"},{heading:"new-features-1",content:"Support for using an LDAP server as the user source"},{heading:"improvements-2",content:"Move to Traefik paerser (not a typo) for label parsing instead of custom solution"},{heading:"improvements-2",content:"Encrypt the session cookie"},{heading:"fixes-3",content:"Fix error state spacing in login form"},{heading:"technical-3",content:"Update dependencies"},{heading:"technical-3",content:"Update translations"},{heading:"technical-3",content:"Run nightly workflow every day"},{heading:"technical-4",content:"Ensure CGO is disabled when building tinyauth binaries"},{heading:"technical-4",content:"Bump dependencies"},{heading:"technical-4",content:"Update translations"},{heading:"new-features-2",content:"Show the commit hash and build date alongside the version in the version command"},{heading:"new-features-2",content:"Option to disable SSL certificate check in generic provider"},{heading:"improvements-3",content:"Rebuilt UI from the ground up using Shadcn, Tailwind, React Query and React Hook Form"},{heading:"improvements-3",content:"Negotiate the API version with the docker host instead of failing"},{heading:"improvements-3",content:"Remove the WWW-Authenticate header to prevent basic auth browser pop-ups"},{heading:"improvements-3",content:"Store version, build date and commit hash in constants instead of files"},{heading:"improvements-3",content:"Generate unique cookie names based on the app URL to avoid conflicts with other instances"},{heading:"improvements-3",content:"Only use 302 redirects to avoid browser caching"},{heading:"technical-5",content:"Update dependencies"},{heading:"technical-5",content:"Deprecate translations CDN"},{heading:"technical-5",content:"Update translations"},{heading:"technical-5",content:"Create nightly release workflow"},{heading:"technical-5",content:"Remove healthcheck from dockerfile as it was causing errors with a custom port"},{heading:"improvements-4",content:"Log when using Github primary email or the first available one"},{heading:"fixes-4",content:"Use the email instead of the username in the OAuth whitelist"},{heading:"new-features-3",content:"Added warning login screen when the redirect URI does not match the configured domain"},{heading:"new-features-3",content:"Regex support for both OAuth and user whitelist"},{heading:"new-features-3",content:"New forgot password screen with the ability to change the text using markdown"},{heading:"new-features-3",content:"Map information from OIDC claims to headers"},{heading:"new-features-3",content:"Support for auto redirecting to your favorite OAuth provider"},{heading:"improvements-5",content:"Add dependabot for dependency updates @gurukulkarni"},{heading:"improvements-5",content:"Add CSRF cookie for protection against cross-site request forgery"},{heading:"improvements-5",content:"Log actual errors alongside the information message"},{heading:"fixes-5",content:"Disable basic authentication for TOTP users"},{heading:"fixes-5",content:"Move the redirect URI back to a separate cookie"},{heading:"technical-6",content:"Ensure the dist directory exists during development"},{heading:"technical-6",content:"Bump dependencies"},{heading:"fixes-6",content:"Ignore whitespaces and new lines in the secret files"},{heading:"fixes-6",content:"Remove Tailscale OAuth provider for security reasons"},{heading:"new-features-4",content:"Internalization through Crowdin and the tinyauth CDN"},{heading:"new-features-4",content:"Healthcheck in Dockerfile to ensure the app runs smoothly"},{heading:"new-features-4",content:"Ability to tell tinyauth to add additional headers to the authentication response (needed for future OIDC provider support)"},{heading:"new-features-4",content:"Brute force protection/Rate limiting by @DragonStuff"},{heading:"new-features-4",content:"Light mode"},{heading:"new-features-4",content:"Amd64 and arm64 binaries are now available for download if you prefer bare metal over docker"},{heading:"improvements-6",content:"Split API to server and handles for better code readability"},{heading:"improvements-6",content:"Refactor error handling to not initialize new variables for every error"},{heading:"improvements-6",content:"All services now use a single config struct for all of the configuration options for better code readability and extensibility"},{heading:"improvements-6",content:"Removed dependency on GIN sessions as the app now uses gorilla sessions directly"},{heading:"improvements-6",content:"The redirect URI is now stored inside the tinyauth session cookie"},{heading:"new-features-5",content:"TOTP support"},{heading:"new-features-5",content:"Ability to disable authentication on specific app paths using regex"},{heading:"new-features-5",content:"Ability to change the login screen name"},{heading:"new-features-5",content:"Ability to change the generic OAuth provider button name"},{heading:"new-features-5",content:"Tinyauth now sets the Remote-User header so you can use it to sign in to other apps"},{heading:"improvements-7",content:"Improved docker handler for checking labels"},{heading:"improvements-7",content:"Improved release workflows for faster build times"},{heading:"improvements-7",content:"Rewritten login page for more modularity"},{heading:"improvements-7",content:"Provide JSON responses if they client does not accept HTML"},{heading:"fixes-7",content:"Fix the oauth whitelist not allowing any users in apps when null"},{heading:"fixes-8",content:"Fix the redirect URI not getting passed correctly to the continue screen"},{heading:"migration-guide",content:"To migrate to v3.0.0 you need to change your authentication paths."},{heading:"migration-guide",content:"If you are using traefik for your reverse proxy, change your forward auth URL to http://tinyauth:3000/api/auth/traefik"},{heading:"migration-guide",content:"If you are using caddy for your reverse proxy, change your auth URL to http://tinyauth:3000/api/auth/caddy"},{heading:"migration-guide",content:"The COOKIE_EXPIRY environment variable has been also renamed to SESSION_EXPIRY (--session-expiry)."},{heading:"new-features-6",content:"Support for Nginx/Nginx Proxy Manager"},{heading:"new-features-6",content:"Authentication to apps using HTTP basic auth"},{heading:"improvements-8",content:"Handle null values from query parameters better in the frontend."},{heading:"improvements-8",content:"The cookie contents also expire based on the SESSION_EXPIRY environment variable increasing security."},{heading:"fixes-9",content:"Fix the OAUTH_WHITELIST not allowing any users by default."},{heading:"fixes-9",content:"Parse the redirect URI correctly to support older browsers."},{heading:"technical-7",content:"Add multiple comments through the codebase to make it more understandable."},{heading:"technical-7",content:"Add tests for the API and utils."},{heading:"fixes-10",content:"Check if docker daemon is available before trying to check for container labels"},{heading:"fixes-10",content:"Redirect to the app URL for the internal server error page"},{heading:"new-features-7",content:"Tailscale OAuth provider"},{heading:"new-features-7",content:"Access controls for protected apps"},{heading:"fixes-11",content:"Omit the domain port from the cookie domain"},{heading:"fixes-11",content:"Fix generic OAuth config not getting parsed correctly"},{heading:"fixes-11",content:"Fix how OAuth providers are displayed"},{heading:"improvements-9",content:"Handle cross protocol redirection correctly alongside with a verification screen"},{heading:"improvements-9",content:"The continue screen has a go home button when no redirect URI is provided"},{heading:"improvements-9",content:"The logger will now not print any sensitive information apart from the email address"},{heading:"fixes-12",content:"Split domain correctly to take account a custom port"},{heading:"fixes-12",content:"Fix the logger printing debug information without a log level set"},{heading:"fixes-13",content:"Do not add comma when the environment variable is empty."},{heading:"fixes-13",content:"Trim spaces from users in user file."},{heading:"migration-guide-1",content:"To migrate you can just change the WHITELIST environment variable to OAUTH_WHITELIST and everything will work correctly. You can also change all your emails back to usernames if you prefer username/password but tinyauth won't stop you from using an email as a username."},{heading:"new-features-8",content:"New SECRETS_FILE (--secrets-file) environment variable allowing you to use a file to store the app secret."},{heading:"new-features-8",content:"New GITHUB_CLIENT_SECRET_FILE (--github-client-secret-file) environment variable allowing you to use a file to store the secret."},{heading:"new-features-8",content:"New GOOGLE_CLIENT_SECRET_FILE (--google-client-secret-file) environment variable allowing you to use a file to store the secret."},{heading:"new-features-8",content:"New GENERIC_CLIENT_SECRERT_FILE (--generic-client-secret-file) environment variable allowing you to use a file to store the secret."},{heading:"new-features-8",content:"New LOG_LEVEL (--log-level) environment variable allowing you to use debug log level for verbose logging."},{heading:"improvements-10",content:"OAuth token is only used to obtain the user email address and it is not stored on the client."},{heading:"improvements-10",content:"Login screen allows you to use non-email values."},{heading:"improvements-10",content:"Cookie logic has been rewritten to use the cookie store correctly."},{heading:"improvements-10",content:"Debug logs have been added everywhere in the app to make debugging easy."},{heading:"improvements-10",content:"Users are not a requirement when using OAuth."},{heading:"improvements-10",content:"User parsing has been rewritten."},{heading:"fixes-14",content:"Fix the WHITELIST environment variable not matching with the --oauth-whitelist flag."},{heading:"migration-guide-2",content:"The only migration you need to do is to change your username into an email address, this applies for both USERS and USERS_FILE. Here is an example:"},{heading:"migration-guide-2",content:"user:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u becomes user@example.com:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u"},{heading:"migration-guide-2",content:"After this simple change just change the tinyauth version to v1.0.0 and it should start up normally."},{heading:"new-features-9",content:"Support for Google, Github and Generic OAuth providers for authenticating."},{heading:"new-features-9",content:"Option to disable continue screen when logging in and immediately redirect to the app."},{heading:"new-features-9",content:"Option to set custom expiry for the session cookie."},{heading:"new-features-9",content:"Option to whitelist specific email addresses for OAuth."},{heading:"improvements-11",content:"Every API error is now logged and the user sees an internal server error page instead of the raw response."},{heading:"fixes-15",content:"Fix the cookie expiry date set to session mode."},{heading:"fixes-15",content:"Split app URL correctly."},{heading:"new-features-10",content:"Create user command"},{heading:"new-features-10",content:"Verify user command"},{heading:"new-features-10",content:"Option to send cookie only through https"},{heading:"improvements-12",content:"Use dependency injection pattern to make the code more readable"},{heading:"fixes-16",content:"Split APP_URL correctly so that the cookie is not set for the root domain if subdomains are being used"},{heading:"new-features-11",content:"Allow configuration of users through a file (same as .htpasswd)."},{heading:"improvements-13",content:"The ROOT_URL environment variable is no longer needed as tinyauth gets the root domain from the APP_URL."},{heading:"improvements-13",content:"The user is displayed as code in the logout screen."},{heading:"fixes-17",content:"Fix the continue screen showing the continue button when no redirect uri is set."}],headings:[{id:"v362",content:"v3.6.2"},{id:"improvements",content:"Improvements"},{id:"fixes",content:"Fixes"},{id:"technical",content:"Technical"},{id:"v361",content:"v3.6.1"},{id:"improvements-1",content:"Improvements"},{id:"fixes-1",content:"Fixes"},{id:"technical-1",content:"Technical"},{id:"v360",content:"v3.6.0"},{id:"new-features",content:"New features"},{id:"fixes-2",content:"Fixes"},{id:"technical-2",content:"Technical"},{id:"v350",content:"v3.5.0"},{id:"new-features-1",content:"New features"},{id:"improvements-2",content:"Improvements"},{id:"fixes-3",content:"Fixes"},{id:"technical-3",content:"Technical"},{id:"v341",content:"v3.4.1"},{id:"technical-4",content:"Technical"},{id:"v340",content:"v3.4.0"},{id:"new-features-2",content:"New features"},{id:"improvements-3",content:"Improvements"},{id:"technical-5",content:"Technical"},{id:"v331",content:"v3.3.1"},{id:"improvements-4",content:"Improvements"},{id:"fixes-4",content:"Fixes"},{id:"v330",content:"v3.3.0"},{id:"new-features-3",content:"New features"},{id:"improvements-5",content:"Improvements"},{id:"fixes-5",content:"Fixes"},{id:"technical-6",content:"Technical"},{id:"v321",content:"v3.2.1"},{id:"fixes-6",content:"Fixes"},{id:"v320",content:"v3.2.0"},{id:"new-features-4",content:"New features"},{id:"improvements-6",content:"Improvements"},{id:"v310",content:"v3.1.0"},{id:"new-features-5",content:"New features"},{id:"improvements-7",content:"Improvements"},{id:"fixes-7",content:"Fixes"},{id:"v301",content:"v3.0.1"},{id:"fixes-8",content:"Fixes"},{id:"v300",content:"v3.0.0"},{id:"migration-guide",content:"Migration guide"},{id:"new-features-6",content:"New features"},{id:"improvements-8",content:"Improvements"},{id:"fixes-9",content:"Fixes"},{id:"technical-7",content:"Technical"},{id:"v211",content:"v2.1.1"},{id:"fixes-10",content:"Fixes"},{id:"v210",content:"v2.1.0"},{id:"new-features-7",content:"New features"},{id:"fixes-11",content:"Fixes"},{id:"v202",content:"v2.0.2"},{id:"improvements-9",content:"Improvements"},{id:"fixes-12",content:"Fixes"},{id:"v201",content:"v2.0.1"},{id:"fixes-13",content:"Fixes"},{id:"v200",content:"v2.0.0"},{id:"migration-guide-1",content:"Migration guide"},{id:"new-features-8",content:"New features"},{id:"improvements-10",content:"Improvements"},{id:"fixes-14",content:"Fixes"},{id:"v100",content:"v1.0.0"},{id:"migration-guide-2",content:"Migration guide"},{id:"new-features-9",content:"New features"},{id:"improvements-11",content:"Improvements"},{id:"fixes-15",content:"Fixes"},{id:"v030",content:"v0.3.0"},{id:"new-features-10",content:"New features"},{id:"improvements-12",content:"Improvements"},{id:"fixes-16",content:"Fixes"},{id:"v020",content:"v0.2.0"},{id:"new-features-11",content:"New features"},{id:"improvements-13",content:"Improvements"},{id:"fixes-17",content:"Fixes"}]};const d=[{depth:2,url:"#v362",title:e.jsx(e.Fragment,{children:"v3.6.2"})},{depth:3,url:"#improvements",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:3,url:"#fixes",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:3,url:"#technical",title:e.jsx(e.Fragment,{children:"Technical"})},{depth:2,url:"#v361",title:e.jsx(e.Fragment,{children:"v3.6.1"})},{depth:3,url:"#improvements-1",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:3,url:"#fixes-1",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:3,url:"#technical-1",title:e.jsx(e.Fragment,{children:"Technical"})},{depth:2,url:"#v360",title:e.jsx(e.Fragment,{children:"v3.6.0"})},{depth:3,url:"#new-features",title:e.jsx(e.Fragment,{children:"New features"})},{depth:3,url:"#fixes-2",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:3,url:"#technical-2",title:e.jsx(e.Fragment,{children:"Technical"})},{depth:2,url:"#v350",title:e.jsx(e.Fragment,{children:"v3.5.0"})},{depth:3,url:"#new-features-1",title:e.jsx(e.Fragment,{children:"New features"})},{depth:3,url:"#improvements-2",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:3,url:"#fixes-3",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:3,url:"#technical-3",title:e.jsx(e.Fragment,{children:"Technical"})},{depth:2,url:"#v341",title:e.jsx(e.Fragment,{children:"v3.4.1"})},{depth:3,url:"#technical-4",title:e.jsx(e.Fragment,{children:"Technical"})},{depth:2,url:"#v340",title:e.jsx(e.Fragment,{children:"v3.4.0"})},{depth:3,url:"#new-features-2",title:e.jsx(e.Fragment,{children:"New features"})},{depth:3,url:"#improvements-3",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:3,url:"#technical-5",title:e.jsx(e.Fragment,{children:"Technical"})},{depth:2,url:"#v331",title:e.jsx(e.Fragment,{children:"v3.3.1"})},{depth:3,url:"#improvements-4",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:3,url:"#fixes-4",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:2,url:"#v330",title:e.jsx(e.Fragment,{children:"v3.3.0"})},{depth:3,url:"#new-features-3",title:e.jsx(e.Fragment,{children:"New features"})},{depth:3,url:"#improvements-5",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:3,url:"#fixes-5",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:3,url:"#technical-6",title:e.jsx(e.Fragment,{children:"Technical"})},{depth:2,url:"#v321",title:e.jsx(e.Fragment,{children:"v3.2.1"})},{depth:3,url:"#fixes-6",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:2,url:"#v320",title:e.jsx(e.Fragment,{children:"v3.2.0"})},{depth:3,url:"#new-features-4",title:e.jsx(e.Fragment,{children:"New features"})},{depth:3,url:"#improvements-6",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:2,url:"#v310",title:e.jsx(e.Fragment,{children:"v3.1.0"})},{depth:3,url:"#new-features-5",title:e.jsx(e.Fragment,{children:"New features"})},{depth:3,url:"#improvements-7",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:3,url:"#fixes-7",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:2,url:"#v301",title:e.jsx(e.Fragment,{children:"v3.0.1"})},{depth:3,url:"#fixes-8",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:2,url:"#v300",title:e.jsx(e.Fragment,{children:"v3.0.0"})},{depth:3,url:"#migration-guide",title:e.jsx(e.Fragment,{children:"Migration guide"})},{depth:3,url:"#new-features-6",title:e.jsx(e.Fragment,{children:"New features"})},{depth:3,url:"#improvements-8",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:3,url:"#fixes-9",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:3,url:"#technical-7",title:e.jsx(e.Fragment,{children:"Technical"})},{depth:2,url:"#v211",title:e.jsx(e.Fragment,{children:"v2.1.1"})},{depth:3,url:"#fixes-10",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:2,url:"#v210",title:e.jsx(e.Fragment,{children:"v2.1.0"})},{depth:3,url:"#new-features-7",title:e.jsx(e.Fragment,{children:"New features"})},{depth:3,url:"#fixes-11",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:2,url:"#v202",title:e.jsx(e.Fragment,{children:"v2.0.2"})},{depth:3,url:"#improvements-9",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:3,url:"#fixes-12",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:2,url:"#v201",title:e.jsx(e.Fragment,{children:"v2.0.1"})},{depth:3,url:"#fixes-13",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:2,url:"#v200",title:e.jsx(e.Fragment,{children:"v2.0.0"})},{depth:3,url:"#migration-guide-1",title:e.jsx(e.Fragment,{children:"Migration guide"})},{depth:3,url:"#new-features-8",title:e.jsx(e.Fragment,{children:"New features"})},{depth:3,url:"#improvements-10",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:3,url:"#fixes-14",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:2,url:"#v100",title:e.jsx(e.Fragment,{children:"v1.0.0"})},{depth:3,url:"#migration-guide-2",title:e.jsx(e.Fragment,{children:"Migration guide"})},{depth:3,url:"#new-features-9",title:e.jsx(e.Fragment,{children:"New features"})},{depth:3,url:"#improvements-11",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:3,url:"#fixes-15",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:2,url:"#v030",title:e.jsx(e.Fragment,{children:"v0.3.0"})},{depth:3,url:"#new-features-10",title:e.jsx(e.Fragment,{children:"New features"})},{depth:3,url:"#improvements-12",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:3,url:"#fixes-16",title:e.jsx(e.Fragment,{children:"Fixes"})},{depth:2,url:"#v020",title:e.jsx(e.Fragment,{children:"v0.2.0"})},{depth:3,url:"#new-features-11",title:e.jsx(e.Fragment,{children:"New features"})},{depth:3,url:"#improvements-13",title:e.jsx(e.Fragment,{children:"Improvements"})},{depth:3,url:"#fixes-17",title:e.jsx(e.Fragment,{children:"Fixes"})}];function i(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"v362",children:"v3.6.2"}),`
`,e.jsx(n.h3,{id:"improvements",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Try to reconnect to LDAP server if heartbeat fails"}),`
`,e.jsxs(n.li,{children:["Handle string type for the ",e.jsx(n.code,{children:"groups"})," claim in the generic OAuth provider"]}),`
`,e.jsx(n.li,{children:"Forward basic auth header to protected apps"}),`
`,e.jsx(n.li,{children:"Internationalize the required and invalid input errors"}),`
`,e.jsx(n.li,{children:"Add auto complete information to auth forms"}),`
`,e.jsx(n.li,{children:"Move healthcheck and favicon requests to debug logs"}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Don't fail app if LDAP fails to start but other user sources are configured"}),`
`]}),`
`,e.jsx(n.h3,{id:"technical",children:"Technical"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Update dependencies"}),`
`,e.jsx(n.li,{children:"Update translations"}),`
`]}),`
`,e.jsx(n.h2,{id:"v361",children:"v3.6.1"}),`
`,e.jsx(n.h3,{id:"improvements-1",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use heartbeat to prevent LDAP server from timing out"}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes-1",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix the password message not being translated"}),`
`]}),`
`,e.jsx(n.h3,{id:"technical-1",children:"Technical"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Update translations"}),`
`,e.jsx(n.li,{children:"Update dependencies"}),`
`,e.jsx(n.li,{children:"Clean up comments in codebase"}),`
`]}),`
`,e.jsx(n.h2,{id:"v360",children:"v3.6.0"}),`
`,e.jsx(n.h3,{id:"new-features",children:"New features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Support for completely disabling Tinyauth authentication for specific IPs or CIDRs using the ",e.jsx(n.code,{children:"tinyauth.ip.bypass"})," label"]}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes-2",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix the label discovery"}),`
`]}),`
`,e.jsx(n.h3,{id:"technical-2",children:"Technical"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Update translations"}),`
`]}),`
`,e.jsx(n.h2,{id:"v350",children:"v3.5.0"}),`
`,e.jsx(n.h3,{id:"new-features-1",children:"New features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add label to select app based on the its domain eliminating the need for keeping the container name the same as the app domain"}),`
`,e.jsx(n.li,{children:"Support for logging in to a protected app using basic auth"}),`
`,e.jsx(n.li,{children:"Support for allowing/blocking IP addresses and/or CIDRs"}),`
`,e.jsx(n.li,{children:"Support for using an LDAP server as the user source"}),`
`]}),`
`,e.jsx(n.h3,{id:"improvements-2",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Move to Traefik paerser ",e.jsx(n.em,{children:"(not a typo)"})," for label parsing instead of custom solution"]}),`
`,e.jsx(n.li,{children:"Encrypt the session cookie"}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes-3",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix error state spacing in login form"}),`
`]}),`
`,e.jsx(n.h3,{id:"technical-3",children:"Technical"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Update dependencies"}),`
`,e.jsx(n.li,{children:"Update translations"}),`
`,e.jsx(n.li,{children:"Run nightly workflow every day"}),`
`]}),`
`,e.jsx(n.h2,{id:"v341",children:"v3.4.1"}),`
`,e.jsx(n.h3,{id:"technical-4",children:"Technical"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure CGO is disabled when building tinyauth binaries"}),`
`,e.jsx(n.li,{children:"Bump dependencies"}),`
`,e.jsx(n.li,{children:"Update translations"}),`
`]}),`
`,e.jsx(n.h2,{id:"v340",children:"v3.4.0"}),`
`,e.jsx(n.h3,{id:"new-features-2",children:"New features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Show the commit hash and build date alongside the version in the version command"}),`
`,e.jsx(n.li,{children:"Option to disable SSL certificate check in generic provider"}),`
`]}),`
`,e.jsx(n.h3,{id:"improvements-3",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Rebuilt UI from the ground up using Shadcn, Tailwind, React Query and React Hook Form"}),`
`,e.jsx(n.li,{children:"Negotiate the API version with the docker host instead of failing"}),`
`,e.jsxs(n.li,{children:["Remove the ",e.jsx(n.code,{children:"WWW-Authenticate"})," header to prevent basic auth browser pop-ups"]}),`
`,e.jsx(n.li,{children:"Store version, build date and commit hash in constants instead of files"}),`
`,e.jsx(n.li,{children:"Generate unique cookie names based on the app URL to avoid conflicts with other instances"}),`
`,e.jsx(n.li,{children:"Only use 302 redirects to avoid browser caching"}),`
`]}),`
`,e.jsx(n.h3,{id:"technical-5",children:"Technical"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Update dependencies"}),`
`,e.jsx(n.li,{children:"Deprecate translations CDN"}),`
`,e.jsx(n.li,{children:"Update translations"}),`
`,e.jsx(n.li,{children:"Create nightly release workflow"}),`
`,e.jsx(n.li,{children:"Remove healthcheck from dockerfile as it was causing errors with a custom port"}),`
`]}),`
`,e.jsx(n.h2,{id:"v331",children:"v3.3.1"}),`
`,e.jsx(n.h3,{id:"improvements-4",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Log when using Github primary email or the first available one"}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes-4",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use the email instead of the username in the OAuth whitelist"}),`
`]}),`
`,e.jsx(n.h2,{id:"v330",children:"v3.3.0"}),`
`,e.jsx(n.h3,{id:"new-features-3",children:"New features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Added warning login screen when the redirect URI does not match the configured domain"}),`
`,e.jsx(n.li,{children:"Regex support for both OAuth and user whitelist"}),`
`,e.jsx(n.li,{children:"New forgot password screen with the ability to change the text using markdown"}),`
`,e.jsx(n.li,{children:"Map information from OIDC claims to headers"}),`
`,e.jsx(n.li,{children:"Support for auto redirecting to your favorite OAuth provider"}),`
`]}),`
`,e.jsx(n.h3,{id:"improvements-5",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add dependabot for dependency updates @gurukulkarni"}),`
`,e.jsx(n.li,{children:"Add CSRF cookie for protection against cross-site request forgery"}),`
`,e.jsx(n.li,{children:"Log actual errors alongside the information message"}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes-5",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Disable basic authentication for TOTP users"}),`
`,e.jsx(n.li,{children:"Move the redirect URI back to a separate cookie"}),`
`]}),`
`,e.jsx(n.h3,{id:"technical-6",children:"Technical"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure the dist directory exists during development"}),`
`,e.jsx(n.li,{children:"Bump dependencies"}),`
`]}),`
`,e.jsx(n.h2,{id:"v321",children:"v3.2.1"}),`
`,e.jsx(n.h3,{id:"fixes-6",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ignore whitespaces and new lines in the secret files"}),`
`,e.jsx(n.li,{children:"Remove Tailscale OAuth provider for security reasons"}),`
`]}),`
`,e.jsx(n.h2,{id:"v320",children:"v3.2.0"}),`
`,e.jsx(n.h3,{id:"new-features-4",children:"New features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Internalization through ",e.jsx(n.a,{href:"https://crowdin.com/project/tinyauth",children:"Crowdin"})," and the tinyauth CDN"]}),`
`,e.jsx(n.li,{children:"Healthcheck in Dockerfile to ensure the app runs smoothly"}),`
`,e.jsx(n.li,{children:"Ability to tell tinyauth to add additional headers to the authentication response (needed for future OIDC provider support)"}),`
`,e.jsx(n.li,{children:"Brute force protection/Rate limiting by @DragonStuff"}),`
`,e.jsx(n.li,{children:"Light mode"}),`
`,e.jsx(n.li,{children:"Amd64 and arm64 binaries are now available for download if you prefer bare metal over docker"}),`
`]}),`
`,e.jsx(n.h3,{id:"improvements-6",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Split API to server and handles for better code readability"}),`
`,e.jsx(n.li,{children:"Refactor error handling to not initialize new variables for every error"}),`
`,e.jsx(n.li,{children:"All services now use a single config struct for all of the configuration options for better code readability and extensibility"}),`
`,e.jsx(n.li,{children:"Removed dependency on GIN sessions as the app now uses gorilla sessions directly"}),`
`,e.jsxs(n.li,{children:["The redirect URI is now stored inside the ",e.jsx(n.code,{children:"tinyauth"})," session cookie"]}),`
`]}),`
`,e.jsx(n.h2,{id:"v310",children:"v3.1.0"}),`
`,e.jsx(n.h3,{id:"new-features-5",children:"New features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"TOTP support"}),`
`,e.jsx(n.li,{children:"Ability to disable authentication on specific app paths using regex"}),`
`,e.jsx(n.li,{children:"Ability to change the login screen name"}),`
`,e.jsx(n.li,{children:"Ability to change the generic OAuth provider button name"}),`
`,e.jsxs(n.li,{children:["Tinyauth now sets the ",e.jsx(n.code,{children:"Remote-User"})," header so you can use it to sign in to other apps"]}),`
`]}),`
`,e.jsx(n.h3,{id:"improvements-7",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Improved docker handler for checking labels"}),`
`,e.jsx(n.li,{children:"Improved release workflows for faster build times"}),`
`,e.jsx(n.li,{children:"Rewritten login page for more modularity"}),`
`,e.jsx(n.li,{children:"Provide JSON responses if they client does not accept HTML"}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes-7",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fix the oauth whitelist not allowing any users in apps when ",e.jsx(n.code,{children:"null"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"v301",children:"v3.0.1"}),`
`,e.jsx(n.h3,{id:"fixes-8",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix the redirect URI not getting passed correctly to the continue screen"}),`
`]}),`
`,e.jsx(n.h2,{id:"v300",children:"v3.0.0"}),`
`,e.jsx(n.h3,{id:"migration-guide",children:"Migration guide"}),`
`,e.jsxs(n.p,{children:["To migrate to ",e.jsx(n.code,{children:"v3.0.0"})," you need to change your authentication paths."]}),`
`,e.jsxs(n.p,{children:["If you are using traefik for your reverse proxy, change your forward auth URL to ",e.jsx(n.code,{children:"http://tinyauth:3000/api/auth/traefik"})]}),`
`,e.jsxs(n.p,{children:["If you are using caddy for your reverse proxy, change your auth URL to ",e.jsx(n.code,{children:"http://tinyauth:3000/api/auth/caddy"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"COOKIE_EXPIRY"})," environment variable has been also renamed to ",e.jsx(n.code,{children:"SESSION_EXPIRY"})," (",e.jsx(n.code,{children:"--session-expiry"}),")."]}),`
`,e.jsx(n.h3,{id:"new-features-6",children:"New features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Support for Nginx/Nginx Proxy Manager"}),`
`,e.jsx(n.li,{children:"Authentication to apps using HTTP basic auth"}),`
`]}),`
`,e.jsx(n.h3,{id:"improvements-8",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Handle ",e.jsx(n.code,{children:"null"})," values from query parameters better in the frontend."]}),`
`,e.jsxs(n.li,{children:["The cookie contents also expire based on the ",e.jsx(n.code,{children:"SESSION_EXPIRY"})," environment variable increasing security."]}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes-9",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fix the ",e.jsx(n.code,{children:"OAUTH_WHITELIST"})," not allowing any users by default."]}),`
`,e.jsx(n.li,{children:"Parse the redirect URI correctly to support older browsers."}),`
`]}),`
`,e.jsx(n.h3,{id:"technical-7",children:"Technical"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add multiple comments through the codebase to make it more understandable."}),`
`,e.jsx(n.li,{children:"Add tests for the API and utils."}),`
`]}),`
`,e.jsx(n.h2,{id:"v211",children:"v2.1.1"}),`
`,e.jsx(n.h3,{id:"fixes-10",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Check if docker daemon is available before trying to check for container labels"}),`
`,e.jsx(n.li,{children:"Redirect to the app URL for the internal server error page"}),`
`]}),`
`,e.jsx(n.h2,{id:"v210",children:"v2.1.0"}),`
`,e.jsx(n.h3,{id:"new-features-7",children:"New features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tailscale OAuth provider"}),`
`,e.jsx(n.li,{children:"Access controls for protected apps"}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes-11",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Omit the domain port from the cookie domain"}),`
`,e.jsx(n.li,{children:"Fix generic OAuth config not getting parsed correctly"}),`
`,e.jsx(n.li,{children:"Fix how OAuth providers are displayed"}),`
`]}),`
`,e.jsx(n.h2,{id:"v202",children:"v2.0.2"}),`
`,e.jsx(n.h3,{id:"improvements-9",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Handle cross protocol redirection correctly alongside with a verification screen"}),`
`,e.jsx(n.li,{children:"The continue screen has a go home button when no redirect URI is provided"}),`
`,e.jsx(n.li,{children:"The logger will now not print any sensitive information apart from the email address"}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes-12",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Split domain correctly to take account a custom port"}),`
`,e.jsx(n.li,{children:"Fix the logger printing debug information without a log level set"}),`
`]}),`
`,e.jsx(n.h2,{id:"v201",children:"v2.0.1"}),`
`,e.jsx(n.h3,{id:"fixes-13",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Do not add comma when the environment variable is empty."}),`
`,e.jsx(n.li,{children:"Trim spaces from users in user file."}),`
`]}),`
`,e.jsx(n.h2,{id:"v200",children:"v2.0.0"}),`
`,e.jsx(n.h3,{id:"migration-guide-1",children:"Migration guide"}),`
`,e.jsxs(n.p,{children:["To migrate you can just change the ",e.jsx(n.code,{children:"WHITELIST"})," environment variable to ",e.jsx(n.code,{children:"OAUTH_WHITELIST"})," and everything will work correctly. You can also change all your emails back to usernames if you prefer username/password but tinyauth won't stop you from using an email as a username."]}),`
`,e.jsx(n.h3,{id:"new-features-8",children:"New features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"SECRETS_FILE"})," (",e.jsx(n.code,{children:"--secrets-file"}),") environment variable allowing you to use a file to store the app secret."]}),`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"GITHUB_CLIENT_SECRET_FILE"})," (",e.jsx(n.code,{children:"--github-client-secret-file"}),") environment variable allowing you to use a file to store the secret."]}),`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"GOOGLE_CLIENT_SECRET_FILE"})," (",e.jsx(n.code,{children:"--google-client-secret-file"}),") environment variable allowing you to use a file to store the secret."]}),`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"GENERIC_CLIENT_SECRERT_FILE"})," (",e.jsx(n.code,{children:"--generic-client-secret-file"}),") environment variable allowing you to use a file to store the secret."]}),`
`,e.jsxs(n.li,{children:["New ",e.jsx(n.code,{children:"LOG_LEVEL"})," (",e.jsx(n.code,{children:"--log-level"}),") environment variable allowing you to use debug log level for verbose logging."]}),`
`]}),`
`,e.jsx(n.h3,{id:"improvements-10",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"OAuth token is only used to obtain the user email address and it is not stored on the client."}),`
`,e.jsx(n.li,{children:"Login screen allows you to use non-email values."}),`
`,e.jsx(n.li,{children:"Cookie logic has been rewritten to use the cookie store correctly."}),`
`,e.jsx(n.li,{children:"Debug logs have been added everywhere in the app to make debugging easy."}),`
`,e.jsx(n.li,{children:"Users are not a requirement when using OAuth."}),`
`,e.jsx(n.li,{children:"User parsing has been rewritten."}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes-14",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Fix the ",e.jsx(n.code,{children:"WHITELIST"})," environment variable not matching with the ",e.jsx(n.code,{children:"--oauth-whitelist"})," flag."]}),`
`]}),`
`,e.jsx(n.h2,{id:"v100",children:"v1.0.0"}),`
`,e.jsx(n.h3,{id:"migration-guide-2",children:"Migration guide"}),`
`,e.jsxs(n.p,{children:["The only migration you need to do is to change your username into an email address, this applies for both ",e.jsx(n.code,{children:"USERS"})," and ",e.jsx(n.code,{children:"USERS_FILE"}),". Here is an example:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"user:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u"})," becomes ",e.jsx(n.code,{children:"user@example.com:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u"})]}),`
`,e.jsxs(n.p,{children:["After this simple change just change the tinyauth version to ",e.jsx(n.code,{children:"v1.0.0"})," and it should start up normally."]}),`
`,e.jsx(n.h3,{id:"new-features-9",children:"New features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Support for Google, Github and Generic OAuth providers for authenticating."}),`
`,e.jsx(n.li,{children:"Option to disable continue screen when logging in and immediately redirect to the app."}),`
`,e.jsx(n.li,{children:"Option to set custom expiry for the session cookie."}),`
`,e.jsx(n.li,{children:"Option to whitelist specific email addresses for OAuth."}),`
`]}),`
`,e.jsx(n.h3,{id:"improvements-11",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Every API error is now logged and the user sees an internal server error page instead of the raw response."}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes-15",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix the cookie expiry date set to session mode."}),`
`,e.jsx(n.li,{children:"Split app URL correctly."}),`
`]}),`
`,e.jsx(n.h2,{id:"v030",children:"v0.3.0"}),`
`,e.jsx(n.h3,{id:"new-features-10",children:"New features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Create user command"}),`
`,e.jsx(n.li,{children:"Verify user command"}),`
`,e.jsx(n.li,{children:"Option to send cookie only through https"}),`
`]}),`
`,e.jsx(n.h3,{id:"improvements-12",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use dependency injection pattern to make the code more readable"}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes-16",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Split ",e.jsx(n.code,{children:"APP_URL"})," correctly so that the cookie is not set for the root domain if subdomains are being used"]}),`
`]}),`
`,e.jsx(n.h2,{id:"v020",children:"v0.2.0"}),`
`,e.jsx(n.h3,{id:"new-features-11",children:"New features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Allow configuration of users through a file (same as ",e.jsx(n.code,{children:".htpasswd"}),")."]}),`
`]}),`
`,e.jsx(n.h3,{id:"improvements-13",children:"Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"ROOT_URL"})," environment variable is no longer needed as tinyauth gets the root domain from the ",e.jsx(n.code,{children:"APP_URL"}),"."]}),`
`,e.jsx(n.li,{children:"The user is displayed as code in the logout screen."}),`
`]}),`
`,e.jsx(n.h3,{id:"fixes-17",children:"Fixes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fix the continue screen showing the continue button when no redirect uri is set."}),`
`]})]})}function l(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{l as default,o as extractedReferences,s as frontmatter,a as structuredData,d as toc};
