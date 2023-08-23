import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import VideoComponent from './components/VideoComponent';
import ServicesPage from './components/ServicesPage';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import { FaWhatsapp } from 'react-icons/fa';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AboutPage from './components/AboutPage';
import TopNav from './components/TopNav';
import CustomCursor from './components/CustomCursor';
import ImageGallery from './components/ImageGallery';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/'>
            <VideoComponent />
          </Route>
          <Route exact path='/about'>
            <AboutPage />
          </Route>
          <Route exact path='/'>
            <ServicesPage />
          </Route>
          <Route exact path='/services'>
            <Services />
          </Route>
          <Route exact path='/contact'> 
            <Contact />
          </Route>
          <Route exact path='/work'> 
            <ImageGallery />
          </Route>
        </Switch>
        <TopNav/>
        <Footer />
        <div className="whatsapp-icon">
          <a href="https://wa.me/+919650388201" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
        <CustomCursor/>
      </Router>
    </>
  );
};

export default App;