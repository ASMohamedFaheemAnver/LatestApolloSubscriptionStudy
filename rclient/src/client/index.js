import { createClient } from "graphql-ws";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { split, HttpLink } from "@apollo/client";
import { Kind, OperationTypeNode } from "graphql";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:5000/graphql",
  })
);

const httpLink = new HttpLink({
  uri: "http://localhost:5000/graphql",
});

const client = new ApolloClient({
  link: split(
    ({ query }) => {
      const def = getMainDefinition(query);
      return (
        def.kind === Kind.OPERATION_DEFINITION &&
        def.operation === OperationTypeNode.SUBSCRIPTION
      );
    },
    wsLink,
    httpLink
  ),
  cache: new InMemoryCache(),
});

export default client;
