import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen} from './Constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Field = props => {
  return (
    <TextInput
      {...props}
      
      style={{borderRadius: 50, height:50,fontSize:16, color: "#8C8C8C", paddingHorizontal: 10, width: '80%', borderWidth: 1,paddingLeft:50, borderColor: "#8c8c8c", marginVertical: 5}}
      placeholderTextColor={'#8C8C8C'}></TextInput>
  );
};

export default Field;
