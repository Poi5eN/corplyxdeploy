import React, { useState } from 'react';
import './TestimonialsPage.css';
import { MdSettingsAccessibility } from "react-icons/md";
import { MdPanToolAlt } from "react-icons/md";

const testimonialsData = [
  {
    id: 1,
    name: 'Anya',
    jobTitle: 'CEO, HappyMint',
    testimonial: 'Wonderful experience working with corplyx tech and they have skilled people for the required task.',
    image: 'https://img.freepik.com/premium-photo/portrait-young-indian-woman-happy-with-internship-human-resources-opportunity-mission-vision-company-values-goals-face-headshot-gen-z-person-with-hr-job-about-us-faq_590464-134290.jpg',
  },
  {
    id: 2,
    name: 'Krishna',
    jobTitle: 'CTO, CornerLime',
    testimonial: 'Corplyx tech. is one of the best that i worked with and I am grateful that I chose them.',
    image: 'https://aestheticdentist.clinic/wp-content/uploads/2018/07/Healers-Dental-Center-9.jpeg',
  },
  {
    id: 3,
    name: 'Sadhya',
    jobTitle: 'Marketing Manager, RockStone',
    testimonial: 'I am looking to work more with the corplyx and they have excellent determination and people who complete their task timely.',
    image: 'https://www.iicd.ac.in/wp-content/uploads/2020/08/1-750x720.jpg',
  },
];

const TestimonialsPage = () => {
    const [expanded, setExpanded] = useState(false);
  
    const testimonialsToShow = expanded ? testimonialsData : [testimonialsData[0]];
  
    const handleExpand = () => {
      setExpanded(!expanded);
    };
  
    const handleCollapse = () => {
      setExpanded(false);
    };

    return (
        <div className="testimonials-page">
          <h2 className="testimonials-heading" style={{ fontSize: '24px' }}>Testimonials</h2>
          <div className="testimonials-container">
            {testimonialsToShow.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-content">
                  <p style={{ textAlign: 'justify' }}>{testimonial.testimonial}</p>
                </div>
                <div className="testimonial-author">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.jobTitle}</p>
                </div>
                {index === 0 && !expanded && (
                  <button className="expand-button" onClick={handleExpand} style={{backgroundColor: 'white' }}>
                    <MdSettingsAccessibility style={{ color: 'red', backgroundColor: 'white' }}/>
                  </button>
                )}
                {index === testimonialsToShow.length - 1 && expanded && (
                  <button className="collapse-button" onClick={handleCollapse} style={{backgroundColor: 'white' }}>
                    <MdPanToolAlt style={{ color: 'blue', backgroundColor: 'white' }}/>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    };

export default TestimonialsPage;
