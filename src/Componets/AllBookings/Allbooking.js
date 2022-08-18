import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

const Allbooking = () => {
    const [allbooking, setAllBooking] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allbooking')
            .then(res => res.json())
            .then(data => setAllBooking(data))
    }, [])

    const handleDelete = (id) => {
        fetch('http://localhost:5000/delete/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .thne(result => {
                fetch('http://localhost:5000/allbooking')
                    .then(res => res.json())
                    .then(data => setAllBooking(data))
            })
    }
    return (
        <div>
            <div className='bookingContainer'>
                {/* <h1> You Have: {bookings.length} Booking</h1> */}

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
                            allbooking.map((booking) =>
                                <tr>
                                    <td>{booking.name}</td>
                                    <td>{booking.phone}</td>
                                    <td>{(new Date(booking.checkIn).toDateString())}</td>
                                    <td>{(new Date(booking.checkOut).toDateString())}</td>
                                    <td><button onClick={() => handleDelete(booking._id)} className='btn btn-primary'><DeleteSweepIcon/> </button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>

            </div>
        </div>
    );
};

export default Allbooking;