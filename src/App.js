import {useState} from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Container from './components/Container';
import DataContext from './data-context'

const client = new ApolloClient({
  uri:"https://cors-anywhere.herokuapp.com/http://jgive-deploy-devcors-6rtudh0rg.herokuapp.com/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      DonationTargetsResult: {
        fields: {
          donationTargets: {
            keyArgs: false,
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
  const [filter, setFilter] = useState({
    orderBy: "approved_at_DESC"
  });
  const value = { filter, setFilter };
  return (
    <ApolloProvider client={client}>
      <DataContext.Provider value={value}>
        <Container />
      </DataContext.Provider>
    </ApolloProvider>
  );
}

export default App;
