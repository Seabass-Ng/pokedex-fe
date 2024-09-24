import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css'
import PokemonList from './pages/PokemonList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  );
}

export default App
