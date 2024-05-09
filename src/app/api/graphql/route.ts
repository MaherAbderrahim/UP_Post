import { ApolloServer } from "@apollo/server";
import typeDefs from "@/GraphQL/schema";
import resolvers from "@/GraphQL/resolvers";
import {createContext} from "@/GraphQL/context"
import { startStandaloneServer } from '@apollo/server/standalone';

// Création du serveur Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Démarrage du serveur
async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: createContext as any, // Assurez-vous d'inclure le contexte ici aussi
  });

  console.log(`🚀  Server ready at: ${url}`);
}


startServer();
