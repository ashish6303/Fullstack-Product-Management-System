import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import AddProduct from './component/AddProduct';
import UpdateProducts from './component/UpdateProducts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/addProduct" element={<AddProduct/>}/>
        <Route path="/updateProduct/:id" element={<UpdateProducts/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
