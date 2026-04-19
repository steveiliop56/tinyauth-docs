import bcrypt from "bcryptjs";

export async function createUser(
  username: string,
  password: string,
  docker: boolean
): Promise<string> {
  const hash = await bcrypt.hash(password, 10);
  const escaped = docker ? hash.replaceAll("$", "$$$$") : hash;
  return `${username}:${escaped}`;
}
