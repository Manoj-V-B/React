
import './App.css';
import { Home } from './compounent/home/home';
import Congartscard from './compounent/congratsCard/congartscard';
import { SuperOver } from './compounent/superover/super';
import { SocialButtom } from './compounent/social-buttom/socialbuttom';
import { MobSms } from './compounent/reactcomp/mobilesms';
import { Login } from './compounent/login/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Technology } from './compounent/technology/technology';
import { Responsive } from './compounent/responsive/Overall/Overall';
import { Count } from './compounent/Hooks/Hooks';
import { Fruit } from './compounent/Fruits/Fruits';








function App() {
  return (
    <>
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Congartscard' element={<Congartscard/>}/>
      <Route path='/SuperOver' element={<SuperOver/>}/>
      <Route path='/SocialButtom' element={<SocialButtom/>}/>
      <Route path='/MobSms' element={<MobSms/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Technology' element={<Technology/>}/>
      <Route path='/responsive/Overall/Overall' element={<Responsive/>}/>
      <Route path='/compounent/Hooks' element={<Count/>}/>
      <Route path='/compounent/Fruits' element={<Fruit/>}/>
      
      
     
    </Routes>
    </BrowserRouter>
  

    </>
  );
}

export default App;
