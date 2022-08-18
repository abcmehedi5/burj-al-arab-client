import React from 'react';
import './DashBoardContent.css'
import EqualizerIcon from '@mui/icons-material/Equalizer';
import chart from '../../images/icons/chart.webp'
import PostAddSharpIcon from '@mui/icons-material/PostAddSharp';
import { useState } from 'react';
import { useEffect } from 'react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupIcon from '@mui/icons-material/Group';

const DashBoardContent = () => {
    const [dashContent, setDashContent] = useState([])
    const [allbooking, setAllBooking] = useState([])
    console.log(allbooking.length);

    useEffect(() => {
        fetch('http://localhost:5000/room')
            .then(res => res.json())
            .then(data => setDashContent(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/allbooking')
            .then(res => res.json())
            .then(data=>setAllBooking(data))
    },[])
    return (
        <div class="DashContent">
            <div className="postCount bgcolor">
                <div>
                    <h2><span> <PostAddSharpIcon fontSize='large' /></span> {dashContent.length}</h2>
                    <h5>All Post</h5>
                    <hr />
                    <p>Update: 2:30 am</p>
                </div>
                {/* <span className='icon'><EqualizerIcon /></span> */}
                <img src={chart} alt="" style={{ width: '40%' }} />
            </div>


            <div className="postCount bgcolor2">
                <div>
                    <h2><span> <LibraryBooksIcon fontSize='large' /></span> {allbooking.length}</h2>
                    <h5>All Booking</h5>
                    <hr />
                    <p>Update: 2:30 am</p>
                </div>
                {/* <span className='icon'><EqualizerIcon /></span> */}
                <img src={chart} alt="" style={{ width: '40%' }} />
            </div>


            <div className="postCount bgcolor3">
                <div>
                    <h2><span> <GroupIcon fontSize='large' /></span> 50</h2>
                    <h5>All Users</h5>
                    <hr />
                    <p>Update: 2:30 am</p>
                </div>
                {/* <span className='icon'><EqualizerIcon /></span> */}
                <img src={chart} alt="" style={{ width: '40%' }} />
            </div>
        </div>
    );
};

export default DashBoardContent;