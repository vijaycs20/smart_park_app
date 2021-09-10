import React, { Component } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions, ImageBackground, Animated, TouchableOpacity, Alert, AppRegistry } from 'react-native';

import { Header, Icon, Button, Chip, Card, ListItem, ViewPagerAndroid, PricingCard, } from "react-native-elements";

import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';


class LocationA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      concat: null,
      coords:[],
      x: 'false',
      cordLatitude:10.78301489989674, 
      cordLongitude: 79.13182498197831,
    };

    this.mergeLot = this.mergeLot.bind(this);

  }

  componentDidMount() {
    Location.installWebGeolocationPolyfill()
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
         this.mergeLot();
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );

   }

  mergeLot(){
    if (this.state.latitude != null && this.state.longitude!=null)
     {
       let concatLot = this.state.latitude +","+this.state.longitude
       this.setState({
         concat: concatLot
       }, () => {
         this.getDirections(concatLot, "10.806020314253614, 79.13784711174497");
       });
     }

   }

   async getDirections(startLoc, destinationLoc) {

         try {
             let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
             let respJson = await resp.json();
             let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
             let coords = points.map((point, index) => {
                 return  {
                     latitude : point[0],
                     longitude : point[1]
                 }
             })
             this.setState({coords: coords})
             this.setState({x: "true"})
             return coords
         } catch(error) {
           console.log('Log Message')
             this.setState({x: "error"})
             return error
         }
     }
  render() {

    return (
      <MapView style={styles.map} initialRegion={{
       latitude:10.806020314253614,
       longitude: 79.13784711174497,
       latitudeDelta: 1,
       longitudeDelta: 1
      }}>

      {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
         coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
         title={"Your Location"}
       />}

       {!!this.state.cordLatitude && !!this.state.cordLongitude && <MapView.Marker
          coordinate={{"latitude":this.state.cordLatitude,"longitude":this.state.cordLongitude}}
          title={"Your Destination"}
        />}

       {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapView.Polyline
            lineDashPattern={[0]}
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"/>
        }

        {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && <MapView.Polyline
            lineDashPattern={[0]}
            coordinates={[
              {latitude: this.state.latitude, longitude: this.state.longitude},
              {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude},
          ]}
          strokeWidth={2}
          strokeColor="red"/>
         }
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default LocationA;