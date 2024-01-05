// IconList.js
import React from 'react';
import IconCard from './iconcard';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';

const IconList = ({ selectedCard, handleCardPress }) => {
  const iconList = [faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faPinterest];

  return (
    <>
      {iconList.map((icon, index) => (
        <IconCard
          key={index}
          icon={icon}
          selected={selectedCard === index}
          onPress={() => handleCardPress(index)}
        />
      ))}
    </>
  );
};

export default IconList;
