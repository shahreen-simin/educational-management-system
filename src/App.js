import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Login/Register';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
