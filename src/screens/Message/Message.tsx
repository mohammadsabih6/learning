import React from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import {data} from './Data'


const MyComponent = () => {
    // Dummy data for cards  
    return (
      <ScrollView>
        {data.map((item, index) => (
          <Card
            key={item.id}
            style={{
              backgroundColor: index < 4 ?  'white': '#ADD8E6', // Set light blue background for the first 3 cards
              margin: 10,
              height:90,
              marginLeft:index < 4 ?10:130,
             
            }}
          >
            <Card.Content>
              <Paragraph style={{fontSize:25,height:90,marginBottom:50 }}>{item.text}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    );
  };
  
  export default MyComponent;
  