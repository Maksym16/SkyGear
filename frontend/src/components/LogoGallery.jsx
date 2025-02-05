import React from 'react';
import droneDeploy from '../assets/images/logos/drone-deploy-logo.png';
import wings from '../assets/images/logos/wings.png';
import droneSource from '../assets/images/logos/drone-source.png';
import kispin from '../assets/images/logos/kispin.png';
import mavic from '../assets/images/logos/mavic.png';
import dji from '../assets/images/logos/dji.png';


const LogoGallery = () => {
  const logos = [
    { src: droneDeploy, alt: 'Drone Deploy' },
    { src: wings, alt: 'Wings' },
    { src: droneSource, alt: 'Drone Source' },
    { src: kispin, alt: 'Kispin' },
    { src: mavic, alt: 'Mavic' },
    { src: dji, alt: 'Dji' },
  ]

  return (
    <div className='logo-gallery py-5 py-lg-11 px-1 px-lg-0'>
     <h2>Brands we work with</h2>
    <div className="logo-gallery-wrapper">
      {logos.map((logo, index) => (
        <img key={index} src={logo.src} alt={logo.alt} />
      ))}
    </div>
    </div>
  );
}

export default LogoGallery;
