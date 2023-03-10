import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import SignIn from "../../component/SignIn/SignIn";
import SignUp from "../../component/SignUp/SignUp";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import SvgUri from 'react-native-svg-uri';
const LoginSign = () => {
  const [activeTab, setActiveTab] = useState("sign-in");

  return (
    <>
      <View style={styles.container}>
        <View>
          <SvgUri
            source={require("../../../assets/butterfly-logo.svg")}
            style={styles.Image}
          />
          <Text style={styles.ShareText}>
            Share your stories. Celebrate their life.
          </Text>
        </View>
      </View>
      <View style={styles.inup}>
        <TouchableOpacity
          onPress={() => setActiveTab("sign-in")}
          style={[
            styles.signinSignUp,
            activeTab == "sign-in" ? styles.activeTab : "",
          ]}
        >
          <Text style={[styles.inuptext,
            activeTab == "sign-in" ? styles.inuptextTab : "",]}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab("sign-up")}
          style={[
            styles.signinSignUp,
            activeTab == "sign-up" ? styles.activeTab : "",
          ]}
        >
          <Text style={[styles.inuptext,
            activeTab == "sign-up" ? styles.inuptextTab : "",]}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View></View>
      <View style={{ height: RFValue(275) }}>
        {activeTab == "sign-in" ? <SignIn /> : <SignUp />}
      </View>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{
              width: "80%",
              borderWidth: 0.5,
              borderColor: "#bfbfbf",
              marginTop: RFValue(62),
            }}
          ></View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text
            style={{
              color: '#1d113d',

              fontSize: RFValue(12),
              marginTop: RFValue(11),
              fontFamily: "Poppins-Light",
            }}
          >
            Or connect using
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: RFValue(20),
              marginTop: RFValue(15),
            }}
          >
            <TouchableOpacity
              style={{
                width: RFValue(140),
                height: RFValue(50),
                borderWidth: 1,
                borderRadius: 50,
                backgroundSize: "cover",
                fontFamily: "Poppins-Medium",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                fontSize: RFValue(20),
                borderColor: "#8c8c8c",
                textAlign: "center",
              }}
            >
              <Text style={{ color: "#1d113d",fontSize: RFValue(16), fontFamily:'Poppins-Medium', }}>
                Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: RFValue(140),
                height: RFValue(50),
                borderWidth: 1,
                borderRadius: 50,
                backgroundSize: "cover",
                fontFamily: "Poppins-Medium",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                fontSize: RFValue(20),
                borderColor: "#8c8c8c",
                textAlign: "center",
              }}
            >
              <Text style={{ color: "#1d113d",fontSize: RFValue(16), fontFamily:'Poppins-Medium', }}>
                Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: '#1d113d',
                fontSize: RFValue(12),
                marginTop: RFValue(15),
                fontFamily: "Poppins-Light",
              }}
            >
              © 2023 butterfly.co
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginSign;

const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(50),
    flexDirection: "row",
    justifyContent: "center",
  },
  inup: {
    flexDirection: "row",
    justifyContent: "center",
    padding: RFValue(20),
  },
  signinSignUp: {
    width: RFValue(152),
    fontSize: RFValue(24),
    textAlign: "center",
    fontWeight: "bold",
    borderBottomWidth: 6,
    padding: RFValue(15),
    color: '#a3a4a3',
    borderColor:'#a3a4a3', 
  },
  activeTab: {
    borderBottomWidth: 6,
    color: '#1d113d',
    borderColor:'#1d113d',
  },
  inuptext: {
    fontSize: RFValue(24),
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "#a3a4a3",
    paddingLeft:RFValue(19),
    borderColor:'#a3a4a3',
  },
  inuptextTab:{
    color: "#1d113d",
  },
  inactiveTab:{
    color: "#e4e5e6",
    padding: RFValue(15),
    borderBottomWidth: 6,
  },
  
  ShareText: {
    fontSize: RFValue(14),
    color: "#282828",
    textAlign: "center",
    marginTop: RFValue(18),
    fontFamily: "Poppins-Light",
  },
  Image:{
    alignItems:'center',
    marginLeft:RFValue(50),
    width:RFValue(150),
    height:RFValue(45),
  }
});
