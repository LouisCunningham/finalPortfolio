import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import '@fortawesome/fontawesome-free/css/all.min.css';



const router = createBrowserRouter(
  // creates the route that leads to the HomePage by using index, otherwise path="/" would be used
  createRoutesFromElements(<Route index element={<HomePage /> } />)
);

function App() {
  return <RouterProvider router={router} /> ;
};

export default App
