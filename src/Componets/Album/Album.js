import React, { useState } from 'react';
import fakeData from '../../RoomData/RoomData';
import './Album.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
const Album = () => {
    const car = fakeData.slice(0, 3)
    const [album, setAlbum] = useState(car);
    console.log(album);
    return (
        <div>
            <h1>Get inspiration for your next trip</h1>
            <br />
            <hr />
            <div className='AlbumContainer'>

                {
                    album.map(data => <div className='albumContent'>

                        <div className='album'>
                            {/* <img src={data.imgUrl} alt="" />
                            <img src={data.imgUrl} alt="" /> */}

                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={data.imgUrl}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    
                    </div>)
                }

            </div>
        </div>


        // <div>
        //     <Card sx={{ maxWidth: 345 }}>
        //         <CardActionArea>
        //             <CardMedia
        //                 component="img"
        //                 height="140"
        //                 image="/static/images/cards/contemplative-reptile.jpg"
        //                 alt="green iguana"
        //             />
        //             <CardContent>
        //                 <Typography gutterBottom variant="h5" component="div">
        //                     Lizard
        //                 </Typography>
        //                 <Typography variant="body2" color="text.secondary">
        //                     Lizards are a widespread group of squamate reptiles, with over 6,000
        //                     species, ranging across all continents except Antarctica
        //                 </Typography>
        //             </CardContent>
        //         </CardActionArea>
        //         <CardActions>
        //             <Button size="small" color="primary">
        //                 Share
        //             </Button>
        //         </CardActions>
        //     </Card>
        // </div>
    );
};

export default Album;