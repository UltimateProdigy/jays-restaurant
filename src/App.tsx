import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { routes } from './lib/routes';
import jaysRoutes from './routes';
import MainLayout from './components/layout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.index} element={<MainLayout />}>
      {jaysRoutes()}
    </Route>
  )
);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
