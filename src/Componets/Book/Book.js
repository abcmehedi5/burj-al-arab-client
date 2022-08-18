import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import rooms from '../../RoomData/RoomData';
import './Book.css'
import { userContext } from '../../App';
import Bookings from '../Bookings/Bookings';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert';
const Book = () => {
    const { roomId } = useParams()
    const fakeDAta = rooms

    const [selectDate, setSelectDate] = useState({
        checkIn: new Date(),
        checkOut: new Date(),
        phone: '',
        gender: '',
    })

    const [massage, setMassage] = useState({
        success: false,
    })
    console.log("clicked massage = " + massage.success);

    // console.log("this is state update: " , selectDate)

    const [loggedin, setLoggedin] = useContext(userContext);

    const handlePhone = (data) => {
        const newSlectDate = { ...selectDate };
        newSlectDate.phone = data.target.value
        setSelectDate(newSlectDate);
    }

    const handleGender = (data) => {
        const newSlectDate = { ...selectDate };
        newSlectDate.gender = data.target.value
        setSelectDate(newSlectDate);
    }




    // data semd to database start
    const handleBook = (e) => {
        e.preventDefault()
        const newBooking = { ...loggedin, ...selectDate }
        // const newBooking = { ...selectDate }
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log("fatch data : " + data);
                const newMassage = { ...massage }
                newMassage.success = true
                setMassage(newMassage);
            })

            swal({
                title: "Good job!",
                text: "Thanks For Booking",
                icon: "success",
                button: "Close",
              });


    }
    return (
        <div className='bookContainer'>


            <div className="headerTitle">
                <h1>Burj Al Arab</h1>
                <h2>A Golobal Icon Of arabian Luxury</h2>
            </div>


            <div className='bookItem'>
                <h1>{roomId}</h1>


                <Form onSubmit={handleBook}>
                    <Form.Group className="mb-3 inputfeald" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone Number" onChange={handlePhone} />
                    </Form.Group>

                    <Form.Group className="mb-3 inputfeald" controlId="formBasicEmail">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Gender" onChange={handleGender} />
                    </Form.Group>




                    <Form.Group className="mb-3 inputfeald" controlId="formBasicEmail">
                        <Form.Label>Chack In</Form.Label>
                        <Form.Control type="datetime-local" placeholder="Enter Your Gender" name='chackIn' />
                    </Form.Group>


                    <Form.Group className="mb-3 inputfeald" controlId="formBasicEmail">
                        <Form.Label>Chack Out</Form.Label>
                        <Form.Control type="datetime-local" placeholder="Enter Your Gender" name='chackOut' />
                    </Form.Group>


                    <Form.Control className='bookingSubmit' type="submit" value='Submit' />
                    {
                        massage.success && <p>Submit booking SuccessFull</p>
                    }

                </Form>


            </div>

        </div>
    );
};

export default Book;