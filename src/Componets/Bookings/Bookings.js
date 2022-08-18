import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Table from 'react-bootstrap/Table';
import './Booking.css'
import burjVideo from '../../images/burjvideo.mp4'
import swal from 'sweetalert';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedin, setLoggedin] = useContext(userContext);

    useEffect(() => {
        fetch('http://localhost:5000/bookings?email=' + loggedin.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDeleteItem = (id) => {
        fetch('http://localhost:5000/delete/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            // fetching the data after deleting start
            .then(result => {
                fetch('http://localhost:5000/bookings?email=' + loggedin.email)
                    .then(res => res.json())
                    .then(data => setBookings(data))

            })
        // fetching the data after deleting end

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }
    return (
        <div className='bookingContainer'>
            {/* <h1> You Have: {bookings.length} Booking</h1> */}

            {/* <div className="bgvideo">
                <video src={burjVideo} autoPlay={true} muted={true} loop={true}></video>
            </div> */}

            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Phone Number</th>
                        <th>From Date</th>
                        <th>To data</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map((booking) =>
                            <tr>
                                <td>{booking.name}</td>
                                <td>{booking.phone}</td>
                                <td>{(new Date(booking.checkIn).toDateString())}</td>
                                <td>{(new Date(booking.checkOut).toDateString())}</td>
                                <td><button className='btn btn-primary' onClick={() => handleDeleteItem(booking._id)}><DeleteSweepIcon/></button></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>

        </div>
    );
};

export default Bookings;