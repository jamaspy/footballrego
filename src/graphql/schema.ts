import { makeSchema } from "nexus";
import { join } from "path";
import * as process from "process";
import * as types from "./types";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(
      process.cwd(),
      "node_modules",
      "@types",
      "nexus-typegen",
      "index.d.ts"
    ),
    schema: join(process.cwd(), "src", "graphql", "schema.graphql"),
  },
  contextType: {
    module: join(process.cwd(), "src", "graphql", "context.ts"),
    export: "Context",
  },
});
