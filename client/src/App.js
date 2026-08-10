import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import AllProducts from './components/AllProducts';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <Router>
      <Routes>
             <Route path='/Navbar' element={<Navbar/>} />
             <Route path='/AllProducts' element={<AllProducts/>} />
             <Route path='/CreateProduct' element={<CreateProduct/>} />
      </Routes>
    </Router>
  );
}

export default App;
