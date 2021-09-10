import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions, ImageBackground, Animated, TouchableOpacity, Alert, AppRegistry } from 'react-native';

import { Header, Icon, Button, Chip, Card, ListItem, ViewPagerAndroid, PricingCard, } from "react-native-elements";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Asset } from 'react-native-unimodules';
import Polyline from '@mapbox/polyline';

import { markers, } from './mapData';
import navigate from './navigate' ;
import booking from './booking' ;
import profile from './profile' ;


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'SMART PARKING' }}
        />
        <Stack.Screen 
          name="Rental" 
          component={Rental}
          options ={{ title: 'DASHBOARD' }} 
        />
        <Stack.Screen 
          name="Search" 
          component={Search}
          options ={{ title: 'SEARCH & BOOK' }} 
        />
        <Stack.Screen
          name="navigate"
          component={navigate}
          options={{ title: 'Navigate' }}
        />
        <Stack.Screen
          name="booking"
          component={booking}
          options={{ title: 'Book Slot' }}
        />
        <Stack.Screen
          name="profile"
          component={profile}
          options={{ title: 'My Profile' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
const [index, setIndex] = React.useState(0);
return (
  <ScrollView style={styles.scrollView}>
    
    <View style={styles.top_out}>
      <View style={styles.top}>
        <ImageBackground  style= { styles.backgroundImage } source={require('./assets/bg1.png')} >
          <Chip
            title="SEARCH     "
            titleStyle={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            }}
           
            loadingProps={{ animating: true }}
            onPress= { () =>
              navigation.navigate('Search', { Id: '120391' })
            }
            icon={{
            name: "place",
            type: "material",
            size: 24,
            color: 'white',
            padding: 10,
            }}  
          />

          <View style={styles.top_out}></View>
            
            <Chip
              title="PROFILE   "
              titleStyle={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              }}
             
              loadingProps={{ animating: true }}
              onPress= { () =>
                navigation.navigate('profile')
              }
              icon={{
              name: "account-circle",
              type: "material",
              size: 22,
              color: 'white',
              padding: 10,
              }}
            />

          <View style={styles.top_out}></View>
            
          <Chip
            title="RENTAL    "
            titleStyle={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            }}
           
            loadingProps={{ animating: true }}
            onPress= { () =>
              navigation.navigate('Rental', { Id: '120391' })
            }
            icon={{
            name: "settings",
            type: "material",
            size: 22,
            color: 'white',
            padding: 10,
            }}
          />

        </ImageBackground>
      </View>

      <View style={{ height: 5,}} />
    </View>
        
    <Card style={styles.box_shadow}>
      <Card.Title style={{color:"#2089dc", fontSize:20, fontWeight:"bold"}}>MY PARKING LOT</Card.Title>
      <Card.Divider/>
    
      <PricingCard
        color="#4f9deb"
        title="BOOKED"
        price="$00.00"
        info={['Id : 120391', 'Ace Mall, Northwest Street, Thanjavur.', ]}
        button={{ title: 'NAVIGATE', icon: 'place', size : 15}}
        onButtonPress= { () =>
          navigation.navigate('navigate')
        }
        
      />
    </Card>

    <View style={styles.top_out}></View>
    <StatusBar style="auto" />
  </ScrollView>
    
  );
};




const Search = ({ navigation, route }) => {
  const initialMapState = {
    markers,
    region: {
      latitude: 22.62938671242907,
      longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

  const [state, setState] = React.useState(initialMapState);



  return (
    <ScrollView style={styles.scrollView}>

      <View style={styles.container}>
        <MapView 
          initialRegion={state.region}
          style={styles.map} 
          provider={PROVIDER_GOOGLE}
        >
          {state.markers.map((marker, index) => {
          return (
            <Marker key={index} coordinate={marker.coordinate} image={require('./assets/map_marker.png')} >
              <Callout tooltip onPress= { () => navigation.navigate('booking') }>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>{marker.title}</Text>
                    <Text>{marker.description}</Text>
                    
                    <View style={styles.button}>
                      <TouchableOpacity
                        style={[
                          styles.signIn, 
                          {
                            borderColor: '#FF6347',
                            borderWidth: 1
                          }
                        ]}
                      >
                        <Text 
                          style={[
                            styles.textSign, 
                            {
                              color: '#FF6347'
                            }
                          ]}
                          onPress= { () =>
                            navigation.navigate('navigate')
                          }
                        > 
                          BOOK NOW 
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                  <View style={styles.arrow} />
                </View>
              </Callout>
            </Marker>
          );
        })}

        </MapView>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
    
  );
};



const Rental = ({ navigation, route }) => {
  
  return ( 
    <Text>This is {route.params.Id}'s profile</Text>
  );
  
};



export default App;


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
    paddingTop: 15,
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
    height: 260,
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

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  //callout bubble
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 130,
  },

  //arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },

  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },

  name: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  image: {
    marginTop: 2,
    width: 100,
    height: 60,
  },

  button: {
    alignItems: 'center',
    marginTop: 5
  },
  signIn: {
      width: '100%',
      padding:5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3
  },
  textSign: {
      fontSize: 14,
      fontWeight: 'bold'
  },
  

});