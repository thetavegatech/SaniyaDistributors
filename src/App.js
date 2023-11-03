import React, { useEffect, useRef } from 'react';
import logo from './images/Saniya-distributors-logo.png';
import banner1 from './banners/1.jpg';
import banner2 from './banners/2.jpg';
import banner3 from './banners/3.jpg';
import banner4 from './banners/4.jpg';
import banner5 from './banners/5.jpg';
import banner6 from './banners/6.jpg';
import bannermain1 from './banners/bannermain1.jpeg'
import bannermain2 from './banners/bannermain2.jpg'
import bannermain3 from './banners/bannermain3.jpg'
import bannermain4 from './banners/bannermain5.jpg'
import bannermain5 from './banners/bannermain4.jpeg'
import bannermain6 from './banners/bannermain6.jpg'
import bannermain7 from './images/1/Whatsaap Diwali-2.jpg'
import bannermain8 from './images/1/Whatsaap Diwali-3.jpg'
import bannermain9 from './images/1/Whatsaap Diwali-4.jpg'
import bannermain10 from './images/1/Whatsaap Diwali-5.jpg'
import bannermain11 from './images/1/Whatsaap Diwali-6.jpg'
import bannermain12 from './images/1/Whatsaap Diwali-7.jpg'
import bannermain13 from './images/1/Whatsaap Diwali-8.jpg'
import myVideo from './banners/video.mp4'
import { GiRotaryPhone } from 'react-icons/gi';
import './App.css';

function App() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        // Trigger the "next" action of the Carousel
        const carousel = new window.bootstrap.Carousel(carouselRef.current);
        carousel.next();
      }
    }, 3000); // Auto slide every 1 second (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);
 const phoneNumber = 9423778938
  return (
    <div className="overflow-hidden">
      <div className="navbar">
        <div className="Logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navimg">
        <p>
        <a href={`tel:${phoneNumber}`}><GiRotaryPhone/> Call Us</a>
      </p>
        </div>
      </div>

      <div 
        id="carouselExampleControls"
        className="carousel slide mt-2"
        data-bs-ride="carousel"
        ref={carouselRef} // Add a ref to the carousel component
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block slider w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100 slider" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100 slider" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner4} className="d-block w-100 slider" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner5} className="d-block w-100 slider"  alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner6} className="d-block w-100 slider" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h1 className='mt-4 text-center'>Our Best Deals</h1>
      <div className='main-1'>
      <div className='mainban1'><img src={bannermain1}/></div>
      <div className='mainban1'><img src={bannermain7}/></div>
      </div>
      <div className='main-1'>
      <div className='mainban1'><img src={bannermain8}/></div>
      <div className='mainban1'><img src={bannermain9}/></div>
      </div>
      <div className='main-1'>
      <div className='mainban1'><img src={bannermain10}/></div>
      <div className='mainban1'><img src={bannermain11}/></div>
      </div>
      <div className='main-1'>
      <div className='mainban1'><img src={bannermain12}/></div>
      <div className='mainban1'><img src={bannermain13}/></div>
      </div>
      <div className='d-flex main2 '>
        <div className='main2ban2'><img src={bannermain2} alt='...'/></div>
      </div>

      <div className='d-flex main2 '>
        <div className='main2ban3'>
        <video controls autoPlay>
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      </div>
      
      <div className='d-flex main2 '>
        <div className='main2ban3'><img src={bannermain6} alt='...'/></div>
      </div>

      <footer>
        <div className='d-flex justify-content-center'><img  src={logo}/></div>
        <h4 className='mt-3 text-center'>Address : Seven Hills, Rashtrasant Tarun Sagarji Chowk,<br/> Jalna Road, Chh. Sambhaji Nagar.</h4>
        <h5 className='mt-3 text-center'>Mobile : 9423778938, 0240-2341619, 9096531783 <br/> 9764466654, 8180864617</h5>
      </footer>
    </div>
  );
}

export default App;
