import React from 'react';
import './main.css';
import Carousel from './Carousel';

function HomePage() {
  const images = [
    'https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    '../images/jeans.jpg',
    '../images/jeans.jpg',
  ];
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <nav class= 'flex-container'>
          <div class= 'nav-item'> About us </div>
          <div class= 'nav-item'> Our Shop </div>
          <div class= 'nav-item'> Contact us </div>
        </nav>
      </header>
      <main>
        <section id='Intro'>
          <div class='flex-container'>
            <h1 class='intro-part' id= 'Big-text'>Second Chance Styles</h1>
            <p class='intro-part second'> Welcome to our college student-run thrift store! Discover an eclectic blend of pre-loved treasures 
              curated by our savvy team of students. From vintage fashion finds to quirky home decor and everything in between, each item tells a unique story waiting to continue with you. 
              Dive into sustainable shopping with style and support our community-driven mission. HHomePagey hunting!
              </p>
          </div>
        </section>
        <section>
        <div className="HomePage">
      <h1>Image Carousel</h1>
      <Carousel images={images} />
    </div>
        </section>
        <section className="featured-items">
          <h2>Some items</h2>
          <div className="item-list">
            {/* Placeholder for featured items */}
            <div className="item-card">
              <img src="https://via.placeholder.com/150" alt="Item" />
              <h3>Item Name</h3>
              <p>Description of the item...</p>
              <button>Add to Cart</button>
            </div>
            <div className="item-card">
              <img src="https://via.placeholder.com/150" alt="Item" />
              <h3>Item Name</h3>
              <p>Description of the item...</p>
              <button>Add to Cart</button>
            </div>
            <div className="item-card">
              <img src="https://via.placeholder.com/150" alt="Item" />
              <h3>Item Name</h3>
              <p>Description of the item...</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
        <section className="about-us">
          <h2>About Us</h2>
          <p>Welcome to SecondChance, where you can find a wide range of pre-loved items at affordable prices. Browse our collection and discover treasures!</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 SecondChanceStyles. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;

