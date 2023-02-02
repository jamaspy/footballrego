import { ApolloProvider as Provider } from "@apollo/client";
import React, { ReactNode } from "react";
import { apolloClient } from "./apolloClient";

interface Props {
  children: ReactNode;
}

export const ApolloProvider = ({ children }: Props) => {
  return <Provider client={apolloClient}>{children}</Provider>;
};
