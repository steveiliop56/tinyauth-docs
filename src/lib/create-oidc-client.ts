function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function generateRandomString(length: number): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const arr = new Uint8Array(length);
  crypto.getRandomValues(arr);
  return Array.from(arr, (b) => chars[b % chars.length]).join("");
}

export function createOidcClient(clientName: string): string {
  const clientId = crypto.randomUUID();
  const clientSecret = "ta-" + generateRandomString(61);

  const uclientName = clientName.toUpperCase();
  const lclientName = clientName.toLowerCase();

  const lines: string[] = [];

  lines.push(`Created credentials for client ${clientName}\n`);
  lines.push(`Client Name: ${clientName}`);
  lines.push(`Client ID: ${clientId}`);
  lines.push(`Client Secret: ${clientSecret}\n`);

  lines.push(`Environment variables:\n`);
  lines.push(`TINYAUTH_OIDC_CLIENTS_${uclientName}_CLIENTID=${clientId}`);
  lines.push(
    `TINYAUTH_OIDC_CLIENTS_${uclientName}_CLIENTSECRET=${clientSecret}`,
  );
  lines.push(
    `TINYAUTH_OIDC_CLIENTS_${uclientName}_NAME=${capitalize(lclientName)}\n`,
  );

  lines.push(`CLI flags:\n`);
  lines.push(`--oidc.clients.${lclientName}.clientid=${clientId}`);
  lines.push(`--oidc.clients.${lclientName}.clientsecret=${clientSecret}`);
  lines.push(`--oidc.clients.${lclientName}.name=${capitalize(lclientName)}\n`);

  lines.push(
    `You can use either option to configure your OIDC client. Make sure to save these credentials as there is no way to regenerate them.`,
  );

  return lines.join("\n");
}
