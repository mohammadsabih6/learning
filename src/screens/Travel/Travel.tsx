// Page.js
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import HeaderText from '../../components/HeaderText';
import IconList from '../../components/IconList';
import { style } from './Style';

function Page() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardPress = (index) => {
    setSelectedCard(index);
  };

  return (
    <SafeAreaView>
      <FontAwesomeIcon icon={faArrowLeft} size={30} style={style.Font} />
      <View style={style.mainView}>
        <HeaderText>Tell us your interests to receive customized trip suggestions</HeaderText>
        <IconList selectedCard={selectedCard} handleCardPress={handleCardPress} />
        <Button
          style={style.Btn}
          mode="contained"
          labelStyle={style.BtnLable}
        >
          Next
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default Page;
