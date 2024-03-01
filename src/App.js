
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from "./LoginAndRegister/Login";
import Register from "./LoginAndRegister/Register"
import Navbar from './Navbar/Navbar';
import ReqireAuthNologin from './ReqireAuthNologin';
import RequirAuthLoggin from './RequirAuthLoggin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Shop/Shop';

function App() {

  return (
<>

<Navbar/>
<Routes>

<Route path='/:page?'element={<RequirAuthLoggin><Home/></RequirAuthLoggin>}></Route>
<Route path='/login' element={<ReqireAuthNologin> <Login/></ReqireAuthNologin>}/>
 <Route path='/Register' element={ <ReqireAuthNologin> <Register/></ReqireAuthNologin>}/>
<Route path='/shop'element={ <RequirAuthLoggin><Shop/></RequirAuthLoggin> }></Route>



  </Routes>

</>
  );
}

export default App;
