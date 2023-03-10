// import { StatusBar } from 'expo-status-bar';
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
const SignUp = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          color: "#1d113d",
          fontSize: RFValue(20),
          fontFamily:"Poppins-Regular",
          fontWeight: "bold",
          marginBottom: RFValue(18),
        }}
      >
        Create an account
      </Text>
      <View style={styles.sectionStyle}>
        <SvgUri
            source={require("../../../assets/icons/User.svg")}
            style={styles.imageStyle}
          />
      <Field placeholder="Full Name" />
      </View>
      <View style={styles.sectionStyle}>
        <SvgUri
            source={require("../../../assets/icons/Email.svg")}
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
      <View style={{width:'82%'}}>
        <Text style={{ color: '#1d113d', fontSize: RFValue(12), fontFamily:'Poppins-Regular', }}>
        Password must be at least 8 characters long and contain a lowercase letter, an uppercase letter, a number, and a special character.
        </Text>
      </View>
      <Btn
        textColor="white"
        bgColor={darkGreen}
        style={{fontSize: RFValue(16), }}
        btnLabel="Sign up"
        Press={() => alert("Sign in")}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    fontSize: RFValue(20),
  },
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
