import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Room from '../Room/Room';
import fakeData from '../../RoomData/RoomData';
import Carousel from 'react-bootstrap/Carousel';
import headimg from '../../images/header.png'
import burj1 from '../../images/burj-1.jpg'
import burj2 from '../../images/burj-2.jpg'
import burj3 from '../../images/burj-3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "swiper/css/navigation";
import Nav from 'react-bootstrap/Nav';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Album from '../Album/Album';
import Footer from '../Footer/Footer';
const Home = () => {
    const [room, setRoom] = useState(fakeData)

    const [roomService, setRoomService] = useState([])

    const [offerCard, setOfferCard] = useState({
        stay: true,
        wedding: false
    })


    const handleStay = () => {
        const newOffer = { ...offerCard }
        newOffer.stay = true
        newOffer.wedding = false
        setOfferCard(newOffer)
    }

    const handleWedding = () => {
        const newOffer = { ...offerCard }
        newOffer.wedding = true
        newOffer.stay = false
        setOfferCard(newOffer)
    }

    useEffect(() => {
        fetch('http://localhost:5000/room')
            .then(res => res.json())
            .then(data => setRoomService(data))
    }, [])

    return (
        <div className='headerContainer'>
            <Carousel className='carouselContainer'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={burj1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Burj Al Arab</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={burj2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Couple Power Room</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={burj3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Enjoy Your Life</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='roomCard'>
                {
                    room.map(room => <Room room={room}></Room>)
                }

            </div>

            <div className="swiperCardContainer">
                <h5>BURJ AL ARAB OFFERS</h5>
                <h1>For our valued guests</h1>

                <div className="swiperMenu" style={{ margin: '30px' }}>
                    <span onClick={() => handleStay()}>STAY</span>
                    <span onClick={() => handleWedding()}>WEDDING</span>
                    {/* 
                    <div>
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="link-1"><span onClick={() => handleStay()}>STAY</span></Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="link-2"><span onClick={() => handleWedding()}>WEDDING</span></Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div> */}
                </div>




                {
                    offerCard.stay === true && <div className="slider">

                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            slidesPerView={3}
                            className="mySwiper"
                        >
                            {
                                room.map((data, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={data.imgUrl} />
                                                <Card.Body>
                                                    <Card.Title>{data.title}</Card.Title>
                                                    <Card.Text> {data.description}</Card.Text>
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>

                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                }

                {
                    offerCard.wedding && <div className="slider">

                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            slidesPerView={3}
                            className="mySwiper"
                        >
                            {
                                roomService.map((data) => {
                                    return (
                                        <SwiperSlide>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={burj1} />
                                                <Card.Body>
                                                    <Card.Title>{data.title}</Card.Title>
                                                    <Card.Text>{data.description}</Card.Text>
                                                    <Button variant="primary">Go somewhere</Button>
                                                </Card.Body>
                                            </Card>

                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>

                }



            </div>
            <Album></Album>
            
            {/* <Footer></Footer> */}

        </div>
    );
};

export default Home;