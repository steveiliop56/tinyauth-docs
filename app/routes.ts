import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("discord", "routes/discord.ts"),
  route("docs/*", "docs/page.tsx"),
  route("api/search", "docs/search.ts"),
] satisfies RouteConfig;
