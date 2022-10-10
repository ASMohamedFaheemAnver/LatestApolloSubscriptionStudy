import { gql } from "@apollo/client";

export const ROOT_SUBSCRIPTION = gql`
  subscription {
    subscribeRequests {
      message
    }
  }
`;
