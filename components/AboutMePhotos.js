import React, { useState } from 'react';
import { Card, Button, CardContent, CardMedia, CardActions, Typography, CardHeader } from '@mui/material';
import Link from 'next/link'; 

const images = [
   "lizzy.png", "bryan.png","Justin.png", "yuneydy.png","Arielle.png"
  
];

const names = [
    "Elizabeth Tulloch","Bryan Caraman"
    , "Justin Harper ", "Yuneydy Paredes","Arielle Barnes"
];

const descriptions = ["Hey! My name is Elizabeth Tulloch and i am a rising sophmore at the Univeritsy of Georgia! I started out my freshman year with not alot of knowlage about coding and left with a true passion for it! I enjoy fullstack devlopment and this project really helped me gain a better appreciation for front end. In my spare time I love to go to the gym, go on hikes and try new food! "," I am an incoming junior this fall studying computer science at the University of Texas at Dallas! I am immensely curious + excited to learn, so I am always interested in tackling new challenges and hearing about anything you find fascinating! I enjoy full stack development but mostly focus on back-end work. In my free time I love to swim, workout, watch movies, and play video games!","I am an incoming sophomore studying computer science at Stony Brook University! I am a first generation student and since high school I have had a ferver to get involved in coding where it was command line interfaces or robotics! The more I branch into other sectors of CS the more I am enthralled by it. Outside of CS, I enjoy building complex lego sets, yo-yoing, and cooking new recipes! ","Hi,I am a rising junior attending Wellesley College. I am studying Computer Science with a minor in Latinx Studies. In the future I hope to become a software engineer with a focus in full-stack engineering. In my free time, I enjoy crochet, video games, and reading.", "Hey everyone! My name is Arielle Barnes and I go to Ohio State University. I love listening for music, designing, sports and more" ]

const AMphotos = () => {
    const [x, setX] = useState(0); 

    const change_person = () => {

        setX((prevX) => (prevX + 1) % names.length);
    };
    console.log(images[x]);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
        <Card sx={{ maxWidth: 500 }} elevation={3} >
            <CardHeader title= {names[x] }align="center" />
            <CardMedia
              component="img"
                sx={{ height: "240px" }}
                image={images[x]}
                align="center"
            />
            <CardContent>
                <Typography variant="body2" color="green" align="center">{descriptions[x]}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={change_person}> Next team member!</Button>
                <Link href="/" >
                     <Button
                        variant="contained"
                        color="primary"
                        style={{ position: 'absolute', top: 10, left: 10,backgroundColor: '#6e3c19'}}>
                                back to home </Button>
                </Link>
            </CardActions>
        </Card>
        </div>
    );
};
function image(){
    return (
        <img src = "" alt = "picture"> </img>
    )
}

export default AMphotos;