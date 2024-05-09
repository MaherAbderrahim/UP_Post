"use client";
import React from "react";
// npm i @apollo/client
// npm i @apollo/space-kit // for styling
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const graphqlUrl = "http://localhost:4000";
  const apolloClient = new ApolloClient({
    uri: graphqlUrl,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
