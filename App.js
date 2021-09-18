import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState, Component } from 'react';
import { StyleSheet, Keyboard, KeyboardAvoidingView, TextInput, TouchableWithoutFeedback, Text, View, Image, SafeAreaView, ScrollView, Dimensions, ImageBackground, Animated, TouchableOpacity, Alert, AppRegistry } from 'react-native';

import { Header, Icon, Button, Chip, Card, ListItem, ViewPagerAndroid, PricingCard, } from "react-native-elements";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Asset } from 'react-native-unimodules';
import Polyline from '@mapbox/polyline';

import { markers, } from './mapData';
import navigate from './navigate' ;
import profile from './profile' ;
import rental from './rental';
import Modal from './Modal';



const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Smart Parking' }}
          initialParams={{ status: 'NOT BOOKED', date: '-', time: '--', amt: '₹ 00.00', address: '---', longitude: '.', latitude:'..'}}
        />
        <Stack.Screen 
          name="rental" 
          component={rental}
          options ={{ title: 'Dashboard' }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{
            headerShown: false
        }}
        />
        <Stack.Screen 
          name="Search" 
          component={Search}
          options ={{ title: 'Search & Book' }} 
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
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{ title: 'Register' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation, route }) => {
const [index, setIndex] = React.useState(0);
const {status, amt, date, time, address, longitude, latitude} = route.params;

return (
  <ScrollView style={styles.scrollView}>
    
    <View style={styles.top_out}>
      <View style={styles.top}>
        <ImageBackground  style= { styles.backgroundImage } source={require('./assets/bg1.png') } borderRadius={50} >
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
            title="  RENT       "
            titleStyle={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            }}
           
            loadingProps={{ animating: true }}
            onPress= { () =>
              navigation.navigate('rental')
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
        
    <Card style={styles.box_shadow} borderRadius={18}>
      <Card.Title style={{color:"#2089dc", fontSize:20, fontWeight:"bold"}}>MY PARKING LOT</Card.Title>
      <Card.Divider/>
    
      <PricingCard
        borderRadius={5}
        color="#4f9deb"
        title= {status}
        price= {amt}
        info={[date, time, address]}
        button={{ title: 'NAVIGATE', icon: 'place', size : 15,}}
        onButtonPress= { () =>
          navigation.navigate('navigate')
        }
        
      />
    </Card>
    <Card style={styles.box_shadow} borderRadius={18}>
      <Card.Title style={{color:"#2089dc", fontSize:20, fontWeight:"bold"}}>Monetize My Slot</Card.Title>
      <Chip
            title="Register    "
            titleStyle={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            }}
           
            loadingProps={{ animating: true }}
            onPress= { () =>
              navigation.navigate('Modal')
            }
            icon={{
            name: "account-circle",
            type: "material",
            size: 22,
            color: 'white',
            padding: 10,
            }}
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


const booking = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  var Time_n, Date_n;
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    Time_n = currentDate.toLocaleTimeString();
    Date_n = currentDate.toLocaleDateString();
  };

  const confirmBooking = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    Time_n = currentDate.toLocaleTimeString();
    Date_n = currentDate.toLocaleDateString();
    fetch('https://webhook.site/eee77d0e-cadd-4f80-81db-bc116e392980', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      date: Date_n,
      time: Time_n,
      amt: 60,
      p_id: '101',
    })
    });
    alert("Booked your slot successfully!");
    navigation.navigate('Home', {status : 'BOOKED', date : Date_n, time : Time_n, amt: '₹ 10.00', address : 'Park 3, Ace Mall, Thanjavur', longitude : '', longitude: ''});
    
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    
  };

  

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.top_out}>
    <View style={styles.top}>
        <ImageBackground  style= { styles.backgroundImage } borderRadius={25} source={require('./assets/bg1.png')} >
          <Chip
            title="Select Date"
            titleStyle={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            }}
           
            loadingProps={{ animating: true }}
            onPress={showDatepicker}
            icon={{
            name: "today",
            type: "material",
            size: 24,
            color: 'white',
            padding: 10,
            }}  
          />

          <View style={styles.top_out}></View>
            
          <Chip
            title="Select Time"
            titleStyle={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            }}
           
            loadingProps={{ animating: true }}
            onPress={showTimepicker}
            icon={{
            name: "timer",
            type: "material",
            size: 22,
            color: 'white',
            padding: 10,
            }}
          />

        </ImageBackground>
        <View>
        </View>
    </View>
    </View>
    <Card borderRadius={25}>
      <Card.Title style={{color:"#696969", fontSize:20, fontWeight:"bold"}}>Cost ₹ 40 / hr </Card.Title>
      <Card.Divider/>
        <Button
        title=" Confirm Booking "
        onPress= {confirmBooking}
      />
       </Card>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="spinner"
          onChange={onChange}
          minimumDate={date}
        />
        
      )}
   
    
    <View style={styles.top_out}></View>
      
    </ScrollView>
      
    );
  };  


const Login = ({ navigation, route }) => {
  

  return (
    
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            
          <Text style={styles.logoText}>Smart Parking</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress= { () =>
                navigation.navigate('Home')
              }
              title="Login"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    
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
  containerView: {
    flex: 1,
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
  loginScreenContainer: {
    flex: 1,
    padding: 25,
  },

  logoText: {
    fontSize: 35,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },

});