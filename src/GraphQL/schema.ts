import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { join, dirname } from "path"; // Correct import for dirname
import { fileURLToPath } from "url";
// import { writeFileSync } from "fs"; // Import writeFileSync
// import { print } from "graphql"; // Import print function


// Get the directory of the current module
const currentDir = dirname(fileURLToPath(import.meta.url));

const typesArray = loadFilesSync(join(currentDir, "schemas"), {
  extensions: ["graphql"],
});


const typeDefs = mergeTypeDefs(typesArray);


// for write all schema in one file

// // Specify the path for the output .graphql file
// const outputPath = join(currentDir, "schema.graphql");

// // Write the typeDefs to the specified file
// writeFileSync(outputPath, print(typeDefs)); // for create schema.graphql file


export default typeDefs;
