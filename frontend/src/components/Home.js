import React from 'react';
import VideoComponent from './VideoComponent';
import About from './About';
import ServicesPage from './ServicesPage';
// import Testimonials from './Testimonials';
import Contact from './Contact';
import TestimonialsPage from './TestimonialsPage';

const Home = () => {
    return (
        <div className="container">
            <VideoComponent/>
            <About/>
            <ServicesPage/>
            <TestimonialsPage/>
            <Contact/>
        </div>
    )
}

export default Home;