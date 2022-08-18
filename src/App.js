import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './Componets/Book/Book';
import NavBar from './Componets/NavBar/NavBar';
import Login from './Componets/Login/Login';
import { createContext, useContext, useState } from 'react';
import Bookings from './Componets/Bookings/Bookings';
import Dashboard from './Componets/Dashboard/Dashboard';
import PrivateRouter from './Componets/PrivateRouter/PrivateRouter';
import Profile from './Componets/Profile/Profile';
import Contact from './Componets/Contact/Contact';
import RoomDetails from './Componets/RoomDetails/RoomDetails';
import PostList from './Componets/PostList/PostList';
import Allbooking from './Componets/AllBookings/Allbooking';
import Footer from './Componets/Footer/Footer';

export const userContext = createContext()
function App() {
  const [loggedin, setLoggedin] = useState({})
  return (
    <div className='App'>
      <userContext.Provider value={[loggedin, setLoggedin]}>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path='/room/:roomId' element={<PrivateRouter><Book></Book></PrivateRouter>}></Route>
            {/* <Route path='/room/:roomId' element={ <><Book></Book></>}></Route> */}

            <Route path='/title/:roomTitle' element={<RoomDetails></RoomDetails>}></Route>

            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>

            {/* <Route path='/allbooking' element={<Char}></Route> */}

            <Route path='/dashboard' element={<PrivateRouter><Dashboard></Dashboard></PrivateRouter> }></Route>
            <Route path='/postList' element={<PostList></PostList>}></Route>

            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/bookings' element={<PrivateRouter><Bookings></Bookings></PrivateRouter>}></Route>
            <Route path='/bookings' element={<Bookings></Bookings>}></Route>
            <Route path='/profile' element={<PrivateRouter><Profile></Profile></PrivateRouter>}></Route>

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
