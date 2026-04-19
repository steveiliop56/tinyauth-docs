import bcrypt from "bcryptjs";

const FORBIDDEN = [':', ',', '\n', '\r'];

export async function createUser(
  username: string,
  password: string,
  docker: boolean
): Promise<string> {
  if (!username || !username.trim()) {
    throw new Error("Username must not be empty or whitespace-only");
  }
  if (!password || !password.trim()) {
    throw new Error("Password must not be empty or whitespace-only");
  }
  for (const ch of FORBIDDEN) {
    if (username.includes(ch)) {
      throw new Error(`Username must not contain forbidden character: ${JSON.stringify(ch)}`);
    }
    if (password.includes(ch)) {
      throw new Error(`Password must not contain forbidden character: ${JSON.stringify(ch)}`);
    }
  }
  const hash = await bcrypt.hash(password, 10);
  const escaped = docker ? hash.replaceAll("$", "$$$$") : hash;
  return `${username}:${escaped}`;
}
