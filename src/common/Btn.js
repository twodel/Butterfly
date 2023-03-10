import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: '#121212',
        borderRadius: 100,
        alignItems: 'center',
        width:105, 
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        marginVertical: 10
      }}>
      <Text style={{color: textColor,fontSize:18, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
