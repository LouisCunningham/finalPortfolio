import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PricingPage from './Pages/PricingPage';
import BlogPage from './Pages/BlogPage';
import BlogPostPage from './components/BlogPostPage';



const router = createBrowserRouter(
  // creates the route that leads to the HomePage by using index, otherwise path="/" would be used
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />} >
    <Route index element={<HomePage /> }/>
    <Route path='/pricing' element={<PricingPage />} />
    <Route path='/blog' element={<BlogPage />} />
    <Route path="/blog/:id" element={<BlogPostPage />} />
  </Route>
)
);

function App() {
  return <RouterProvider router={router} /> ;
};

export default App
