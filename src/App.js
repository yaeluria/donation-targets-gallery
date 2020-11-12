import './App.css';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Gallery from './components/Gallery'

const client = new ApolloClient({
  uri: 'https://cors-anywhere.herokuapp.com/http://jgive-deploy-devcors-6rtudh0rg.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Gallery />
    </ApolloProvider>
  );
}

export default App;
