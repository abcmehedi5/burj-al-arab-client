import React, { useContext } from 'react';
import { userContext } from '../../App';
import './Profile.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import { useEffect } from 'react';
const Profile = () => {
    const [loggedin, setLoggedin] = useContext(userContext);
    const [ booking , setBookings] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/bookings?email='+loggedin.email)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])

    return (
        // <div>

        //     {/* <h1>Name: {loggedin.name}</h1>
        //     <h1>Email: {loggedin.email}</h1>
        //     <img src={loggedin.photo} alt="" /> */}


        //     {/* <section class="vh-100">
        //         <div class="container py-5 h-100">
        //             <div class="row d-flex justify-content-center align-items-center h-100">
        //                 <div class="col col-md-9 col-lg-7 col-xl-5">
        //                     <div class="card">
        //                         <div class="card-body p-4">
        //                             <div class="d-flex text-black">
        //                                 <div class="flex-shrink-0">
        //                                    <img src={loggedin.photo} alt="logo" />
        //                                 </div>
        //                                 <div class="flex-grow-1 ms-3">
        //                                     <h5 class="mb-1">{loggedin.name}</h5>
        //                                     <p class="mb-2 pb-1">{loggedin.email}</p>
        //                                     <div class="d-flex justify-content-start rounded-3 p-2 mb-2" >
        //                                         <div>
        //                                             <p class="small text-muted mb-1">Articles</p>
        //                                             <p class="mb-0">41</p>
        //                                         </div>
        //                                         <div class="px-3">
        //                                             <p class="small text-muted mb-1">Followers</p>
        //                                             <p class="mb-0">976</p>
        //                                         </div>
        //                                         <div>
        //                                             <p class="small text-muted mb-1">Rating</p>
        //                                             <p class="mb-0">8.5</p>
        //                                         </div>
        //                                     </div>
        //                                     <div class="d-flex pt-1">
        //                                         <button type="button" class="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
        //                                         <button type="button" class="btn btn-primary flex-grow-1">Follow</button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section> */}

        // </div>

        <div>
            <section class="vh-100"className='profileContainer'>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-12 col-xl-4">

                            <div class="card" className='card'>
                                <div class="card-body text-center">
                                    <div class="mt-3 mb-4">
                                       <img src={loggedin.photo} alt="" />
                                    </div>
                                    <h4 class="mb-2">{loggedin.name}</h4>
                                    <p class="text-muted mb-4">@User <span class="mx-2">|</span> 
                                    <p>{loggedin.email}</p>
                                    </p>
                                    <div class="mb-4 pb-2">
                                        <button type="button" class="btn btn-outline-primary btn-floating">
                                            <FacebookIcon/>
                                        </button>
                                        <button type="button" class="btn btn-outline-primary btn-floating">
                                            <TwitterIcon/>
                                        </button>
                                        <button type="button" class="btn btn-outline-primary btn-floating">
                                           <InstagramIcon/>
                                        </button>
                                    </div>
                                    <button type="button" class="btn btn-primary btn-rounded btn-lg">
                                        Message now
                                    </button>
                                    <div class="d-flex justify-content-between text-center mt-5 mb-2">
                                        <div>
                                            <p class="mb-2 h5">{booking.length}</p>
                                            <p class="text-muted mb-0">My Booking</p>
                                        </div>
                                        <div class="px-3">
                                            <p class="mb-2 h5">8512</p>
                                            <p class="text-muted mb-0">Income amounts</p>

                                            {
                                                booking.map(data => <p>{data.title}</p>)
                                            }
                                        </div>
                                        <div>
                                            <p class="mb-2 h5">4751</p>
                                            <p class="text-muted mb-0">Total Transactions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;