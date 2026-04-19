import { TOTP, Secret } from "otpauth";

export interface GenerateTotpResult {
  secret: string;
  otpauthUrl: string;
  updatedUser: string;
}

export function generateTotp(userStr: string): GenerateTotpResult {
  const colonIndex = userStr.indexOf(":");
  if (colonIndex === -1) {
    throw new Error("Invalid user format. Expected username:hash");
  }

  const username = userStr.slice(0, colonIndex);
  const rest = userStr.slice(colonIndex + 1);

  if (!username || !rest) {
    throw new Error("Invalid user string, expected 'username:hash'");
  }

  if (rest.includes(":")) {
    throw new Error("User already has a TOTP secret");
  }

  const secret = new Secret({ size: 20 });
  const totp = new TOTP({
    issuer: "Tinyauth",
    label: username,
    secret,
  });

  const otpauthUrl = totp.toString();
  const secretB32 = secret.base32;
  const updatedUser = `${userStr}:${secretB32}`;

  return { secret: secretB32, otpauthUrl, updatedUser };
}
