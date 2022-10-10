import { gql } from "@apollo/client";

export const ROOT_QUERY = gql`
  query {
    root {
      message
    }
  }
`;
