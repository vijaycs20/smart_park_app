import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Photo,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';

import {Avatar} from "react-native-elements";


export default class form extends Component {

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  

  render() {
    return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
            />
        </View>

        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Contact Number"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              />
        </View>

        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              />
        </View>
        
        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
              placeholder="Location Longitude"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
            />
        </View>
        <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
              placeholder="Location Lattitude"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
        />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => alert("Request Sent!\nWe'll reach you shortly.")}>
          <Text style={styles.signUpText}>Register</Text>
        </TouchableHighlight>
      </View>
      </ScrollView>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f1fa',
    paddingBottom: 90,
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#2089dc",
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
    
  }
});