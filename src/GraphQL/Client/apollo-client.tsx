"use client";
import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const graphqlUrl = "http://localhost:4000";
  const apolloClient = new ApolloClient({
    uri: graphqlUrl,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
