import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const LinkButton = ({link, text}) => {
  return (
      <Link to={link} className="link-button">
        <FaArrowRight className='link-button-icon' />
        {text}
      </Link>
  );
}

export default LinkButton;
