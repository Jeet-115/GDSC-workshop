import logo from './logo.svg';
import './App.css';
import Text from './components/text'
import Profilee from './screens/Profilee';
import Loginn from './components/Loginn'
import Register from './components/Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div class='App '>
      {/* <Text/> */}
      {/* <Profilee /> */}
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginn setIsLogin={setIsLogin} />}/>
          <Route path='/Register' element={<Register isLogin={isLogin}/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      {/* <h1 className='font-bold text-7xl text-orange-500'>Hi</h1> */}
      
    </div>
  );
}

export default App;
