import './App.css';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Container from './components/Container'

const client = new ApolloClient({
  uri:"https://cors-anywhere.herokuapp.com/http://jgive-deploy-devcors-6rtudh0rg.herokuapp.com/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      DonationTargetsResult: {
        fields: {
          donationTargets: {
            keyArgs: false,
            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container />
    </ApolloProvider>
  );
}

export default App;
