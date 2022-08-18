import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../RoomData/RoomData';
import './RoomDetails.css'
import Card from 'react-bootstrap/Card';
import bed from '../../images/icons/bed.png'
import parson from '../../images/icons/person.png'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
const RoomDetails = () => {
    const { roomTitle } = useParams()
    console.log(roomTitle);
    const [roomService, setRoomService] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/room')
    //         .then(res => res.json())
    //         .then(data => setRoomService(data))
    // }, [])

    const room = fakeData.find(room => room.title === roomTitle)
    // const room = roomService.find(room => room._id === roomTitle)

    return (









        <div className='detailsContainer'>
            <img src={room.imgUrl} alt="" />
            <div className="detailsInfoContainer">

                <h1>{room.title}</h1>
                <p>{room.detailsDescription}</p>

                <div className="detials">
                    <h4><img src={bed} alt="" />{room.bed}</h4>
                    <h4><img src={parson} alt="" />{room.bedType}</h4>
                    <h4> <img src={parson} alt="" />{room.capacity}</h4>
                    <h4 style={{ color: 'blue' }}><PriceChangeIcon/> {room.price}</h4>
                    <h4> <BookmarkAddedIcon /> {room.id}</h4>
                </div>
            </div>
            <Link to={'/room/' + room.title}><button className='btn btn-primary'>Booking</button></Link>
            <h3><Link to='/home'>Go to Another Room</Link></h3>
            
        </div>
    );
};

export default RoomDetails;