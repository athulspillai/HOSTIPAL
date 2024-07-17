
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Userlogin from './components/User/Userlogin/Userlogin';
import Userregister from './components/User/Userregister/Userregister';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Userlogin />} />
          <Route path='/' element={<Userregister />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
