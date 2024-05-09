"use client";
import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const graphqlUrl = "http://localhost:3000/api/graphql";

  const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
      uri: graphqlUrl,
      cache: new InMemoryCache(),
    });
  });

  const apolloClient = getClient();

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
