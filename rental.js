import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, ImageBackground,TouchableOpacity, Alert, Platform, ScrollView, Animated} from 'react-native';
import {Icon, Button, Chip, Card, PricingCard, Avatar, Badge } from "react-native-elements";

export const rental = () => {
  
  return (
    <ScrollView style={styles.scrollView}>
    

    <Card style={styles.box_shadow}>
      <Card.Title style={{color:"#2089dc", fontSize:20, fontWeight:"bold"}}>My Account</Card.Title>
  
      <Card.Divider/>

      <Avatar 
    size='large'
    rounded
    alignSelf='center'
    source={require('./assets/female.jpg.jpg')}
    />
    
      <PricingCard
        
        title="UID : 7441"
        price="Ms. Sanjana"
        info={['Owner Id : 120391', 'Park-area : Ace Mall, Northwest Street, Thanjavur.', ]}
        button={{ title: ' Verified', icon: 'verified',color: 'green', size : 5}}
        />


    </Card>

    <PricingCard                              
        
        title="My Wallet"
        price="$ 250.99"
        info={['  Minimum Balance of $25 Should be there to redeem. ' ]}
        button={{ title: 'Redeem Now', icon: 'attach-money', size : 15}}
        onButtonPress= { () =>
          alert("Redeemed Successfully!")
        }
      />
      <PricingCard                              
        title="Parked Vehicles"
        price="16"
        info={[' Total No. of Vehicles parked in your Parking lot' ]}
        button={{ title: '#',color:'#fff' , size : 1}}
      />
      <PricingCard                              
        title="Time Usage"
        price="02 : 30 : 05"
        info={['  Total time of usage of your parking lot' ]}
        button={{ title: '#', size : 1, color:'#fff'}}      />



    
  </ScrollView>
  );
};

export default rental;


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
    elevation: 10,
    
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
    height: 200,
  }

});