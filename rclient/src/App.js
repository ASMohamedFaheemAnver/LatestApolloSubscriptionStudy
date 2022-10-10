import { ApolloProvider } from "@apollo/client";
import client from "client";
import Root from "screens/Root";

function App() {
  return (
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  );
}

export default App;
