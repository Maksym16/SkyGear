import React from 'react';
import drone from '../assets/images/drone.webp';
import nerd from '../assets/images/nerd.webp';
import LinkButton from './LinkButton';

const Specialization = () => {
  return (
    <div className="specialization-wrapper">
      <div className="specialization-left">
        <img src={nerd} className="specialization-img" alt="nerd" />
        <div className="content">
          <h2 className="header-black-solid">we are true drone nerds
          </h2>
          <p className="text-black">
          Our experts are specifically trained on the latest drone technology to be able to assist you on the best solution for your needs.
.
          </p>
        </div>
      </div>
      <div className="specialization-right">
        <img src={drone} className="specialization-img" alt={'drone'} />
        <div className="content">
          <h2 className="header-white-solid">save big with DJI certified refurbished</h2>
          <p className="text-white">
          We are one of the only DJI-authorized service centers in the United States and employ a group of experts technicians that can get you up and running quickly with genuine part
          </p>
          <LinkButton link={'/'} text={'shop dji refurbished'}/>
        </div>
      </div>
    </div>
  );
};

export default Specialization;
