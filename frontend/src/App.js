import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/main/Navbar';
import Home from './components/main/Home';
import SignIn from './components/main/SignIn';
import SignUp from './components/main/SignUp';
import ForgetPswd from './components/main/ForgetPswd';
import Feedback from './components/main/Feedback';
import Pro_entry from './components/main/Pro_entry';
import Pro_list from './components/main/Pro_list';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Navigate to='/homepage' />}/>
      <Route element={<Home />} path='homepage' />
      <Route element={<SignIn />} path='signin' />
      <Route element={<SignUp />} path='signup' />
      <Route element={<ForgetPswd />} path='forgetpswd' />
      <Route element={<Feedback />} path='feedback' />
      <Route element={<Pro_entry />} path='pro_entry' />
      <Route element={<Pro_list />} path='pro_list' />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
