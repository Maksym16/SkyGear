import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const LinkButton = ({link, text, variant}) => {
  return (
      <Link to={link} className={`link-button ${variant}`}>
        <FaArrowRight className='link-button-icon' />
        {text}
      </Link>
  );
}

export default LinkButton;
