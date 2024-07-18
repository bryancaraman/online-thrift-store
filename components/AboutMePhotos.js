import React, { useState } from 'react';
import { Card, Button, CardContent, CardMedia, CardActions, Typography, CardHeader, Box, InputBase, IconButton } from '@mui/material';
import { FavoriteBorder, PaddingRounded, PersonOutline, ShoppingCart } from '@mui/icons-material';
import Link from 'next/link'; 

const images = [
   "liz.png", "bryan.png","Justin.png", "yuneydy.png","Arielle.png"
  
];

const names = [
    "Elizabeth Tulloch","Bryan Caraman"
    , "Justin Harper ", "Yuneydy Paredes","Arielle Barnes"
];

const descriptions = ["Hey! My name is Elizabeth Tulloch and I am a rising sophmore at the University of Georgia! I started out my freshman year with limited knowlage about coding and finished with a true passion for it! I enjoy fullstack devlopment and this project really helped me gain a better appreciation for front end. In my spare time I love to go to the gym, go on hikes and try new food! "," I am an incoming junior this fall studying computer science at the University of Texas at Dallas! I am immensely curious + excited to learn, so I am always interested in tackling new challenges and hearing about anything you find fascinating! I enjoy full stack development but mostly focus on back-end work. In my free time I love to swim, workout, watch movies, and play video games!","I am an incoming sophomore studying computer science at Stony Brook University! I am a first generation student and since high school I have had a ferver to get involved in coding where it was command line interfaces or robotics! The more I branch into other sectors of CS the more I am enthralled by it. Outside of CS, I enjoy building complex lego sets, yo-yoing, and cooking new recipes! ","Hi,I am a rising junior attending Wellesley College. I am studying Computer Science with a minor in Latinx Studies. In the future I hope to become a software engineer with a focus in full-stack engineering. In my free time, I enjoy crochet, video games, and reading.", "Hey everyone! My name is Arielle Barnes and I go to Ohio State University. I love listening for music, designing, sports and more" ]

const AMphotos = () => {
    const [x, setX] = useState(0); 

    const change_person = () => {

        setX((prevX) => (prevX + 1) % names.length);
    };
    
    return (
        <div>
        <header className='HomePage-header'>
        <Box display="flex" justifyContent="space-between" alignItems="center" py={1} borderBottom={1} borderColor="brown.500">
            <Box display="flex" alignItems="center">
              <Link legacyBehavior href="/">
                <img src="/BrownLogo.png" alt="Logo" style={{ height: '50px' }} />
              </Link>
            </Box>
            <Box display="flex" alignItems="center">
              <Link legacyBehavior href="/aboutMe">
                  <a style={{ color: '#6E3C19', margin: '0 16px' }}>ABOUT US</a>
              </Link>
              <Link legacyBehavior href="/shop">
                <a style={{ color: '#6E3C19', margin: '0 16px' }}>SHOP</a>
              </Link>
              <Link legacyBehavior href="/sell">
                <a style={{ color: '#6E3C19', margin: '0 16px' }}>SELL</a>
              </Link>
            </Box>
          
          <Box display="flex" alignItems="center">
            <InputBase placeholder="Search" style={{ margin: '0 16px', border: '1px solid beige', padding: '4px' }} />
            <IconButton style={{ color: '#8A9A5B' }}><FavoriteBorder /></IconButton>
            <IconButton style={{ color: '#8A9A5B' }}><PersonOutline /></IconButton>
            <Link legacyBehavior href="/cart">
              <IconButton style={{ color: '#8A9A5B' }} ><ShoppingCart /></IconButton>
            </Link>
          </Box>
    
        </Box>
      </header>

      <h1> <center>Welcome to our team</center> </h1>

        <Typography variant="body1" color="green" align="center" padding={1}>We are a dynamic team of intern boot campers at GoDaddy, driven by our passion for sustainable solutions. Tasked with applying our training in APIs, Python, HTML, and CSS, and more we have crafted a captivating storefront and seamless shopping cart experience. 
            Inspired by GoDaddy's commitment to sustainability, we take pride in creating a website that resonate with our values and yours. Explore our site and join us in 
            embracing a more sustainable future through thoughtful consumption!
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
        <Card sx={{ maxWidth: 500 }} elevation={3} >
            <CardHeader title= {names[x] }align="center" />
            <CardMedia
              component="img"
                sx={{ height: "400px" }}
                image={images[x]}
                align="center"
            />
            <CardContent>
                <Typography variant="body2" color="green" align="center">{descriptions[x]}</Typography>
            </CardContent>
            <CardActions>
                <div className='flex-button'>
                    <Button className='about-button' onClick={change_person}> Next team member!</Button>
                </div>
            </CardActions>
        </Card>
        </div>
        </div>
    );
};
function image(){
    return (
        <img src = "" alt = "picture"> </img>
    )
}

export default AMphotos;