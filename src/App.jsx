import {
  Route, 
  createHashRouter, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './Layouts/MainLayout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PricingPage from './Pages/PricingPage';
import BlogPage from './Pages/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import ContactPage from './Pages/ContactPage';
import NotFoundPage from './Pages/NotFoundPage';


const router = createHashRouter(
  // creates the route that leads to the HomePage by using index, otherwise path="/" would be used
  createRoutesFromElements(
  <Route basename="/finalPortfolio/" path='/' element={<MainLayout />} >
    <Route index element={<HomePage /> }/>
    <Route path='/pricing' element={<PricingPage />} />
    <Route path='/blog' element={<BlogPage />} />
    <Route path="/blog/:id" element={<BlogPostPage />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
)
);

function App() {
  return <RouterProvider router={router} /> ;
};

export default App
