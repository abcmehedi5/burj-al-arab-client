import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import KingBedIcon from '@mui/icons-material/KingBed';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BedIcon from '@mui/icons-material/Bed';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './Room.css'
const Room = (props) => {
    const { title, description, imgUrl, bed, capacity, bedType, avatar, price, _id } = props.room
    return (
        <div className='roomCardContainer'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title><Link to={'/title/' + title}>{title}</Link></Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className='bookCardFooter'>
                        <BedIcon /><p> {bed}</p>
                        <KingBedIcon /><p>{bedType}</p>
                        <ReduceCapacityIcon/><p>{capacity}</p>
                        <PermIdentityIcon/><p>{avatar}</p>
                        <AttachMoneyIcon/><p>{price}</p>
                    </div>
                    <Link to={"/room/" + title}><Button variant="primary">Booking</Button></Link>
                </Card.Body>
            </Card>



        </div>

    );
};

export default Room;