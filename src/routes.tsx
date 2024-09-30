import { createBrowserRouter } from "react-router-dom";
import PokemonList from "./pages/PokemonList/PokemonList";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Pokemon from "./pages/Pokemon/Pokemon";

const router = createBrowserRouter([{
  path: '/',
  element: <PokemonList />,
  errorElement: <ErrorPage />,
}, {
  path: '/pokemon/:pokemonId',
  element: <Pokemon />
}])

export default router