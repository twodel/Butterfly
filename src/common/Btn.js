import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export default function Btn({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: '#121212',
        borderRadius: 100,
        alignItems: 'center',
        width: RFValue(105), 
        height: RFValue(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: RFValue(5),
        marginVertical: 10,
        paddingBottom:5,
      }}>
      <Text style={{color: textColor,fontSize:RFValue(18), fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
