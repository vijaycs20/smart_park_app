import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions, ImageBackground, } from 'react-native';

import { Header, Icon, Button, Chip, Card, ListItem, ViewPagerAndroid, PricingCard } from "react-native-elements";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Asset } from 'react-native-unimodules';

const MapTestScreen = () => {
  
      return (
          <MapView
            provider={PROVIDER_GOOGLE} 
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker 
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
              image={require('./assets/map_marker.png')}
              title="Test Title"
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>Favourite Restaurant</Text>
                    <Image 
                      style={styles.image}
                      source={require('./assets/banner/banner1.jpg')}
                    />
                  </View>
                  <View style={styles.arrowBorder} />
                  <View style={styles.arrow} />
                </View>
              </Callout>
            </Marker>
          </MapView>
      );
  };
  
  export default MapTestScreen;
  
  const styles = StyleSheet.create({
    map: {
      height: '100%'
    },
    // Callout bubble
    bubble: {
      flexDirection: 'column',
      alignSelf: 'flex-start',
      backgroundColor: '#fff',
      borderRadius: 6,
      borderColor: '#ccc',
      borderWidth: 0.5,
      padding: 15,
      width: 150,
    },
    // Arrow below the bubble
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
      // marginBottom: -15
    },
    // Character name
    name: {
      fontSize: 16,
      marginBottom: 5,
    },
    // Character image
    image: {
      width: "100%",
      height: 80,
    },
  });