import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { join, dirname } from "path"; // Correct import for dirname
import { fileURLToPath } from "url";

const currentDir = dirname(fileURLToPath(import.meta.url));

const typesArray = loadFilesSync(join(currentDir, "schemas"), {
  extensions: ["graphql"],
});

const typeDefs = mergeTypeDefs(typesArray);

export default typeDefs;
