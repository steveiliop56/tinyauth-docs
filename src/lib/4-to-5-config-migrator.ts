const CONFIG_ENV_KEYS_MAP: Record<string, string> = {
  PORT: "TINYAUTH_SERVER_PORT",
  ADDRESS: "TINYAUTH_SERVER_ADDRESS",
  APP_URL: "TINYAUTH_APPURL",
  USERS: "TINYAUTH_AUTH_USERS",
  USERS_FILE: "TINYAUTH_AUTH_USERSFILE",
  SECURE_COOKIE: "TINYAUTH_AUTH_SECURECOOKIE",
  OAUTH_WHITELIST: "TINYAUTH_OAUTH_WHITELIST",
  OAUTH_AUTO_REDIRECT: "TINYAUTH_OAUTH_AUTOREDIRECT",
  SESSION_EXPIRY: "TINYAUTH_AUTH_SESSIONEXPIRY",
  LOGIN_TIMEOUT: "TINYAUTH_AUTH_LOGINTIMEOUT",
  LOGIN_MAX_RETRIES: "TINYAUTH_AUTH_LOGINMAXRETRIES",
  LOG_LEVEL: "TINYAUTH_LOG_LEVEL",
  APP_TITLE: "TINYAUTH_UI_TITLE",
  FORGOT_PASSWORD_MESSAGE: "TINYAUTH_UI_FORGOTPASSWORDMESSAGE",
  BACKGROUND_IMAGE: "TINYAUTH_UI_BACKGROUNDIMAGE",
  LDAP_ADDRESS: "TINYAUTH_LDAP_ADDRESS",
  LDAP_BIND_DN: "TINYAUTH_LDAP_BINDDN",
  LDAP_BIND_PASSWORD: "TINYAUTH_LDAP_BINDPASSWORD",
  LDAP_BASE_DN: "TINYAUTH_LDAP_BASEDN",
  LDAP_INSECURE: "TINYAUTH_LDAP_INSECURE",
  LDAP_SEARCH_FILTER: "TINYAUTH_LDAP_SEARCHFILTER",
  RESOURCES_DIR: "TINYAUTH_RESOURCES_PATH",
  DATABASE_PATH: "TINYAUTH_DATABASE_PATH",
  TRUSTED_PROXIES: "TINYAUTH_AUTH_TRUSTEDPROXIES",
  DISABLE_ANALYTICS: "TINYAUTH_ANALYTICS_ENABLED",
  DISABLE_RESOURCES: "TINYAUTH_RESOURCES_ENABLED",
  SOCKET_PATH: "TINYAUTH_SERVER_SOCKETPATH",
  DISABLE_UI_WARNINGS: "TINYAUTH_UI_WARNINGSENABLED",
};

const CONFIG_CLI_KEYS_MAP: Record<string, string> = {
  port: "server.port",
  address: "server.address",
  "app-url": "appurl",
  users: "auth.users",
  "users-file": "auth.usersfile",
  "secure-cookie": "auth.securecookie",
  "oauth-whitelist": "oauth.whitelist",
  "oauth-auto-redirect": "oauth.autoredirect",
  "session-expiry": "auth.sessionexpiry",
  "login-timeout": "auth.logintimeout",
  "login-max-retries": "auth.loginmaxretries",
  "log-level": "log.level",
  "app-title": "ui.title",
  "forgot-password-message": "ui.forgotpasswordmessage",
  "background-image": "ui.backgroundimage",
  "ldap-address": "ldap.address",
  "ldap-bind-dn": "ldap.binddn",
  "ldap-bind-password": "ldap.bindpassword",
  "ldap-base-dn": "ldap.basedn",
  "ldap-insecure": "ldap.insecure",
  "ldap-search-filter": "ldap.searchfilter",
  "resources-dir": "resources.path",
  "database-path": "database.path",
  "trusted-proxies": "auth.trustedproxies",
  "disable-analytics": "analytics.enabled",
  "disable-resources": "resources.enabled",
  "socket-path": "server.socketpath",
  "disable-ui-warnings": "ui.warningsenabled",
};

const FLIP_FLAGS = [
  "disable-resources",
  "disable-analytics",
  "disable-ui-warnings",
];
const FLIP_ENV = [
  "DISABLE_RESOURCES",
  "DISABLE_ANALYTICS",
  "DISABLE_UI_WARNINGS",
];

function buildEnvMap(env: string): Record<string, string> {
  const lines = env.split("\n");
  let res: Record<string, string> = {};

  for (const line of lines) {
    if (line.trim() == "") {
      continue;
    }
    const lineTrimmed = line.trim();
    if (lineTrimmed.startsWith("#") || lineTrimmed.startsWith("--")) {
      continue;
    }
    const lineSplit = line.trim().split("=");
    const key = lineSplit[0];
    let value = lineSplit.slice(1).join("=");
    if (FLIP_ENV.includes(key)) {
      value = value === "true" ? "false" : "true";
    }
    res[key] = value;
  }

  return res;
}

function buildCliMap(cli: string): Record<string, string> {
  const lines = cli.split("\n");
  let res: Record<string, string> = {};

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed == "" || !trimmed.startsWith("--")) {
      continue;
    }
    const flag = trimmed.substring(2);
    const flagSplit = flag.split("=");
    const key = flagSplit[0];
    let value = flagSplit.slice(1).join("=");
    if (FLIP_FLAGS.includes(key)) {
      value = value === "true" ? "false" : "true";
    }
    res[key] = value;
    continue;
  }

  return res;
}

function migrateMap<
  T extends typeof CONFIG_ENV_KEYS_MAP | typeof CONFIG_CLI_KEYS_MAP,
>(old: Record<string, string>, IMAP: T): Record<string, string> {
  const res: Record<string, string> = {};

  for (const key in old) {
    const newKey = IMAP[key as keyof typeof IMAP] as string | undefined;
    if (!newKey) {
      continue;
    }
    res[newKey] = old[key];
  }

  return res;
}

function recompileCliToString(map: Record<string, string>): string {
  let res = "";
  for (const key in map) {
    res += `--${key}=${map[key]}\n`;
  }
  return res;
}

function recompileEnvToString(map: Record<string, string>): string {
  let res = "";
  for (const key in map) {
    res += `${key}=${map[key]}\n`;
  }
  return res;
}

export function migrateConfig(input: string): string {
  let res = "";

  const env = buildEnvMap(input);
  const cli = buildCliMap(input);

  const envMigrated = migrateMap(env, CONFIG_ENV_KEYS_MAP);
  const cliMigrated = migrateMap(cli, CONFIG_CLI_KEYS_MAP);

  res += recompileEnvToString(envMigrated);
  res += recompileCliToString(cliMigrated);

  return res;
}
