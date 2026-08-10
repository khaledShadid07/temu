import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import AllProducts from './components/AllProducts';
import CreateProduct from './components/CreateProduct';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
             <Route path='/' element={<Main/>} />
             <Route path='/Navbar' element={<Navbar/>} />
             <Route path='/AllProducts' element={<AllProducts/>} />
             <Route path='/CreateProduct' element={<CreateProduct/>} />
             <Route path='/Footer' element={<Footer/>} />
      </Routes>
    </Router>
  );
}

export default App;
