import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, ImageBackground,TouchableOpacity, Alert, Platform, ScrollView, Animated} from 'react-native';
import {Icon, Button, Chip, Card, PricingCard, Avatar, Badge } from "react-native-elements";


export const profile = () => {
  
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.top_out}></View>
    <View style={styles.top}>
    <ImageBackground  style= { styles.backgroundImage } borderRadius={18} source={require('./assets/bg1.png')} >
      <View style={styles.detail}>
    <Avatar 
    size='large'
  rounded
  source={require('./assets/avatar.jpg')}
/><Text style ={{fontSize: 15, fontWeight:'bold',}}>{"\n"}Sarah Lones{"\n"}</Text>
<Badge value="TN 32 AZ 5055" status="primary" />
</View>
</ImageBackground>
    </View>
    <PricingCard borderRadius={18}
        color="#708090"
        title="My Wallet"
        price="$68.20"
        info={['  Minimum Balance of $25 Should be maintained for Booking new slots! ' ]}
        button={{ title: 'Add Money', icon: 'attach-money', size : 15}}
        onButtonPress= { () =>
          alert("Wallet Updated Successfully!")
        }
        
      />
      
    <View style={styles.top_out}></View>
  </ScrollView>
  );
};

export default profile;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box_shadow: {
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
	    height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  top_out: {
    paddingTop: 20,
    alignSelf: "center",
  },

  top: {
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,

    width: (Dimensions.get('window').width - 30),
    height: 200,
    alignSelf: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 1
  },

  detail: {
    alignSelf: 'center',
    padding: 20,
  }


});