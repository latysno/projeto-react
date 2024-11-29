import './App.css'
import Menu from './components/Menu'
import Login from './components/Login'
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App
