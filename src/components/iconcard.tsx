// IconCard.js
import React from 'react';
import { Card } from 'react-native-paper';
import { TouchableRipple } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { style } from '../screens/Travel/Style';

const IconCard = ({ icon, selected, onPress }) => {
  return (
    <TouchableRipple onPress={onPress} rippleColor="rgba(255, 0, 127, 0.3)" style={{ borderRadius: 20 }}>
      <Card
        style={{
          width: 150,
          margin: 10,
          backgroundColor: selected ? 'pink' : 'white',
          borderColor: selected ? 'pink' : 'black',
          
          borderWidth: 2,
          borderRadius: 20,
        }}
      >
        <Card.Content
          style={style.cardContent}
        >
          <FontAwesomeIcon size={40} icon={icon} style={{ marginRight: 5 }} />
        </Card.Content>
      </Card>
    </TouchableRipple>
  );
};

export default IconCard;
