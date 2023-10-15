//App.js

//Problem Statement : Create an app for scheduling appointments with businesses or professionals.

import './App.css';
import Home from './components/Home';
import MySchedule from './components/MySchedule';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile'
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookAppointment from './components/BookAppointment';
import Layout from './components/Layout';

function App() {

  // const [user, setUser] = useState(null);
  // const [token, setToken] = useState(null);

  // const handleLogin = (username, token) => {
  //   setUser(username);
  //   setToken(token);
  // };

  // const handleLogout = () => {
  //   setUser(null);
  //   setToken(null);
  // };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<LoginPage />} path='/' ></Route>
          <Route element={<SignUp/>} path = '/SignUp'></Route>
          <Route path='/' element={<Layout />}>
            <Route element={<Home />} path='/Home' ></Route>
            <Route element={<BookAppointment />} path='/BookAppointment' ></Route>
            <Route element={<MySchedule />} path='/MySchedule' ></Route>
            <Route element={<Profile/>} path = '/Profile'></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
