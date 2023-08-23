import React from 'react';
import './ServicesPage.css';
import { Link } from 'react-router-dom'


const ServicesPage = () => {
  const servicesData = [
    {
      id: 1,
      image: 'https://cdn.dribbble.com/users/572419/screenshots/4909082/maintenance.gif',
      title: 'Server Maintenance',
      description: 'Maintenance of the servers.',
    },
    {
      id: 2,
      image: 'https://cdn.dribbble.com/users/1233499/screenshots/3850691/web-development.gif',
      title: 'Web Development',
      description: 'Development of websites as per needs.',
    },
    {
      id: 3,
      image: 'https://cdn.dribbble.com/users/1603428/screenshots/4158705/mob-dev.gif',
      title: 'Mobile application',
      description: 'App Development and deployment.',
    },
    {
      id: 4,
      image: 'https://cdn.dribbble.com/users/3191392/screenshots/6165882/dribbble.gif',
      title: 'Cyber Security',
      description: 'Protection and cyber security.',
    },
    {
      id: 5,
      image: 'https://cdn.dribbble.com/users/6739681/screenshots/14939126/media/a8a901abec0f14386b6acdbc1f806128.gif',
      title: 'Cloud Storage',
      description: 'Data storage in Clouds.',
    },
    {
      id: 6,
      image: 'https://cdn.dribbble.com/users/1912990/screenshots/6496981/web_developing.gif',
      title: 'Software Development',
      description: 'Development of softwares for all requirements.',
    },
    {
      id: 7,
      image: 'https://cdn.dribbble.com/users/1842274/screenshots/6605654/social_media.gif',
      title: 'Domain and Hosting Services',
      description: 'Hosting services as per your needs.',
    },
    {
      id: 8,
      image: 'https://cdn.dribbble.com/users/2018101/screenshots/4694266/seoanimation400.gif',
      title: 'Search Engine Optimisation',
      description: 'Get your websites appear on top in search.',
    },
    {
      id: 9,
      image: 'https://cdn.dribbble.com/users/2918596/screenshots/8860450/marketing.gif',
      title: 'Digital Marketing',
      description: 'Social and digital media marketing.',
    },
    // Add more services data objects here
  ];

  return (
    <div className="services-page">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-container">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <Link to="/services">
              <button className="read-more-btn">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
