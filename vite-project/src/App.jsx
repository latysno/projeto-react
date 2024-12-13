import './App.css'
import Menu from './page/menu/Menu'
import Login from './page/Login'
import Cadastro from './page/cadastro/Cadastro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Menu/>} />
        <Route path='/cadastrar' element={<Cadastro/>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
