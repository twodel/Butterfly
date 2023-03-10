import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import SvgUri from 'react-native-svg-uri';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const LetGetStarted = () => {
  return (
    <View style={styles.container}>
      <View>
        <SvgUri
            source={require("../../../assets/butterfly-logo.svg")}
            style={styles.Image}
          />
        </View>
        <View>
        <SvgUri
            source={require("../../../assets/icons/three-line.svg")}
            // style={styles.Image}
          />
        </View>
    </View>
  );
};

export default LetGetStarted;

const styles = StyleSheet.create({
  Image:{
    alignItems:'center',
    width:RFValue(150),
    height:RFValue(45),
  },
  container:{
    height:RFValue(99),
    backgroundColor:'#fff',
    elevation: RFValue(9),
    shadowColor: '#000000b3',
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    paddingTop:RFValue(50),
    paddingLeft:RFValue(19),
    paddingRight:RFValue(19),
    paddingBottom:RFValue(13),
  }
});