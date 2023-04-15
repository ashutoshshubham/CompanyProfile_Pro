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
import All_Details from './components/main/All_Details';
import Update_Pro from './components/main/Update_Pro';
import Profile_check from './components/main/Profile_check';
import UserProvider from './context/UserProvider'
import UserAuth from './auth/UserAuth'
import AdminProvider from './context/AdminProvider'

function App() {
  return (
    <BrowserRouter>
      {/* <AdminProvider> */}
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Navigate to='/homepage' />} />
            <Route element={<Home />} path='homepage' />
            <Route element={<SignIn />} path='signin' />
            <Route element={<SignUp />} path='signup' />
            <Route element={<ForgetPswd />} path='forgetpswd' />
            <Route element={<Feedback />} path='feedback' />
            <Route element={<UserAuth><Pro_entry /></UserAuth>} path='pro_entry' />
            {/* <Route element={<Pro_entry />} path='pro_entry' /> */}
            <Route element={<Pro_list />} path='pro_list' />
            <Route element={<All_Details />} path='all_details' />
            <Route element={<Update_Pro />} path='update_pro/:id' />
            <Route element={<Profile_check />} path='profile_check/:id' />
          </Routes>
        </UserProvider>
      {/* </AdminProvider> */}
    </BrowserRouter>
  );
}

export default App;
