import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { style } from '../screens/Travel/Style';

const HeaderText = ({ children }) => {
  return (
    <View style={style.headerView}>
    <Text style={style.headerText}>{children}</Text>
    </View>
  );
};

export default HeaderText;
