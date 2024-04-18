import { ApolloServer } from "apollo-server-micro";
import  typeDefs  from "@/GraphQL/schema";
import  resolvers  from "@/GraphQL/resolvers";
import Cors from "micro-cors";

const cors = Cors();
const apolloServer = new ApolloServer({typeDefs,resolvers})
  
const startServer = apolloServer.start()

export default cors
( async function handler(req: any, res: any) {
    await startServer;
    await apolloServer.createHandler({
      path: '/api/graphql',
    })(req, res);
})



export const config = {
  api: {
    bodyParser: false,
  },
};