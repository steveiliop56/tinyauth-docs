import { createFromSource } from "fumadocs-core/search/server";
import { source } from "@/lib/source";

const server = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: "english",
});

export async function loader() {
  return server.staticGET();
}
