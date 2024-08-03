import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Userlogin from './components/User/Userlogin/Userlogin';
import Userregister from './components/User/Userregister/Userregister';
import Doctorlogin from './components/Doctor/Doctorlogin/Doctorlogin';
import Doctorregister from './components/Doctor/Doctorregister/Doctorregister';
import Doctordetails from './components/Doctor/Doctordetails/Doctordetails';
import Homepage from './components/Homepage/Homepage/Homepage';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/user/login' element={<Userlogin />} />
          <Route path='/user/register' element={<Userregister />} />
          <Route path='/doctor/login' element={<Doctorlogin/>}/>
          <Route path='/doctor/register' element={<Doctorregister />}/>
          <Route path='/doctor/details' element={<Doctordetails/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
