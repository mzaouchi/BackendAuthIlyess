import './App.css';
import Home from './Components/Home';
import NavAuth from './Components/NavAuth';
import {Routes, Route} from 'react-router-dom'
import Register from './Components/Register';
import Login from './Components/Login';
import Profil from './Components/Profil';
import PrivateRoute from './Components/PrivateRoute';
import AffErrors from './Components/AffErrors';
function App() {
  return (
    <div>
      <NavAuth/>
      <AffErrors/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
