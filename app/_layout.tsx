import { Slot } from "expo-router";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo";

export default function Layout() {
  return (
    <ApolloProvider client={client}>
      <Slot />
    </ApolloProvider>
  );
}
