import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PostList from '../PostList/PostList';
import './Dashboard.css'
import swal from 'sweetalert';
import DashBoardContent from '../DashBoardContent/DashBoardContent';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SortIcon from '@mui/icons-material/Sort';
import DnsIcon from '@mui/icons-material/Dns';
import Allbooking from '../AllBookings/Allbooking';
import PublishIcon from '@mui/icons-material/Publish';
const Dashboard = () => {

    const [room, setRoom] = useState({})
    const [dashMenu, setdashMenu] = useState({
        roomAdd: false,
        postList: false,
        dashBoardContent: true,
        allbooking: false,
    })

    const handleDashBoardContent = () => {
        const newDashCon = { ...dashMenu }
        newDashCon.dashBoardContent = true
        newDashCon.roomAdd = false
        newDashCon.postList = false
        newDashCon.allbooking = false
        setdashMenu(newDashCon)
    }

    const handleAddroom = () => {
        const newdash = { ...dashMenu }
        newdash.roomAdd = true
        newdash.postList = false
        newdash.dashBoardContent = false
        newdash.allbooking = false
        setdashMenu(newdash)
    }

    const handlePosList = () => {
        const newdash = { ...dashMenu }
        newdash.roomAdd = false
        newdash.postList = true
        newdash.dashBoardContent = false
        newdash.allbooking = false
        setdashMenu(newdash)
    }

    const handleChange = (e) => {
        const newRoom = { ...room }
        newRoom[e.target.name] = e.target.value
        setRoom(newRoom);
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        // const FormData = new FormData()
        // FormData.append('title', room.title)
        // FormData.append('bed', room.bed)
        // FormData.append('capacity', room.capacity)
        // FormData.append('price', room.price)
        // FormData.append('description', room.description)

        fetch('http://localhost:5000/roomAdd', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(room)
        })

            .then(res => res.json())
            .then(data => {
                console.log("update successfull")
            })

        swal({
            title: "Good job!",
            text: "Thanks For Booking",
            icon: "success",
            button: "Close",
        });

    }

    const handleBookingList = () => {
        const newBookingAll = { ...dashMenu }
        newBookingAll.allbooking = true
        newBookingAll.roomAdd = false
        newBookingAll.postList = false
        newBookingAll.dashBoardContent = false
        setdashMenu(newBookingAll)
    }
    return (
        <div>
            <div class="row g-0">
                <div class="col-md-2 dashMenu">
                    <div class="list-group" className='sidebarBtn'>

                        <button onClick={() => handleDashBoardContent()} type="button" class="list-group-item list-group-item-action"><DashboardIcon /> Dashboard</button>

                        <button onClick={() => handleAddroom()} type="button" class="list-group-item list-group-item-action"> <PostAddIcon /> Add Room Service</button>
                        {/* <Link to='/postList'><button type="button" class="list-group-item list-group-item-action"> <i class="fa-regular fa-rectangle-list"></i> Post List</button></Link> */}

                        <button onClick={() => handlePosList()} type="button" class="list-group-item list-group-item-action"> <SortIcon /> Post List</button>
                        <button onClick={() => handleBookingList()} type="button" class="list-group-item list-group-item-action"> <DnsIcon /> Booking List</button>


                    </div>
                </div>


                {dashMenu.roomAdd && <div class="col-md-8 mt-4">
                    <h3>Add Room Service</h3>
                    <form onSubmit={handleSubmit} >
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Room Title</label>
                            <input type="text" class="form-control" placeholder='Room Title' onChange={handleChange} name='title' />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Bed Type</label>
                            <input type="text" class="form-control" placeholder='Bed Type' onChange={handleChange} name='bed' />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Capacity</label>
                            <input type="text" class="form-control" placeholder='Capacity' onChange={handleChange} name='capacity' />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Price</label>
                            <input type="text" class="form-control" placeholder='Price' onChange={handleChange} name='price' />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Description</label>
                            <input type="text" class="form-control p-5" placeholder='Room Description' onChange={handleChange} name='description' />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Photo</label>
                            <input type="file" class="form-control" placeholder='Price' onChange={handleChange} name='price' />
                        </div>


                        <input type="submit"  value= 'Submit' className='inputBtn' />
                    </form>


                </div>

                }

                <div class="col-md-8  dash-right">
                    {dashMenu.postList && <PostList></PostList>}
                    {dashMenu.dashBoardContent && <DashBoardContent></DashBoardContent>}
                    {dashMenu.allbooking && <Allbooking></Allbooking>}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;