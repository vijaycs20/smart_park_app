import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, ImageBackground,TouchableOpacity, Alert, Platform, ScrollView, Animated} from 'react-native';
import {Icon, Button, Chip, Card } from "react-native-elements";
import DateTimePicker from '@react-native-community/datetimepicker';

export const booking = () => {
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
    console.log(Time_n);
    console.log(Date_n);
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
        <ImageBackground  style= { styles.backgroundImage } source={require('./assets/bg1.png')} >
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
    <Card>
      <Card.Title style={{color:"#2089dc", fontSize:20, fontWeight:"bold"}}>Rs. 60 </Card.Title>
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

export default booking;


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
    height: 240,
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

});