import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import Field from "../../common/Field";
import { darkGreen } from "../../common/Constants";
import Btn from "../../common/Btn";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import SvgUri from 'react-native-svg-uri';
const SignIn = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          color: "#1d113d",
          fontSize: RFValue(22),
          fontWeight: "bold",
          marginBottom: RFValue(18),
          marginTop: RFValue(40),
        }}
      >
        Welcome back!
      </Text>
      <View style={styles.sectionStyle}>
        <SvgUri
            source={require("../../../assets/icons/User.svg")}
            style={styles.imageStyle}
          />
        <Field
          placeholder="Email"
          style={{ flex: 1 }}
          
        />
      </View>
      <View style={styles.sectionStyle}>
        <SvgUri
            source={require("../../../assets/icons/Lock.svg")}
            style={styles.imageStyle}
          />
      <Field placeholder="Password" secureTextEntry={true} />
      </View>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          paddingRight: RFValue(16),
          marginTop: RFValue(15),
          marginLeft: RFValue(16),
          marginBottom: RFValue(11),
        }}
      >
        <Text style={{ color: '#1d113d', fontSize: 14, fontFamily: 'Poppins-Medium', }}>
          Forgot Password?
        </Text>
      </View>
      <Btn
        textColor="white"
        bgColor={darkGreen}
        style={{ width: RFValue(105), height: RFValue(50), fontFamily:'Poppins-Bold',  }}
        btnLabel="Sign in"
        Press={() => alert("Sign in")}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    position:'absolute',
    left:RFValue(18),
    height: RFValue(22),
    width: RFValue(22),
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
