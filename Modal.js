// import React, { useState } from "react";  
// import { Button, StyleSheet, Text, View } from "react-native";  
// import NativeForms, { sendCompletedForm } from "native-forms"; // must be version >= 1.1.4  
  
// // must be JSON object exported from Dashboard  
// const OFFLINE_FORM = {/* label: 'Offline Form'... */};  
  
// const App = () => {  
//   const [savedForm, updateSavedForm] = useState(null);  
//   const [hasForm, showForm] = useState(false);  
//   const show = () => showForm(true);  
//   const hide = () => showForm(false);  
  
//   const sendSavedForm = async () => {  
//     if (savedForm) {  
//       await sendCompletedForm(savedForm);  
//       console.warn("Form sent successfully");  
//     } else {  
//       console.warn("No saved form to send");  
//     }
//   };
  
//   return (  
//     <View style={styles.container}>  
//       <Text>Offline forms test</Text>  
  
//       <Button title="Show Form" onPress={show} color="#20f" />  
//       <Button title="Send Saved Form" onPress={sendSavedForm} />  
  
//       {hasForm && (  
//         <NativeForms  
// 	  formJSON={OFFLINE_FORM}  
//           onClose={hide}  
//           noInternetConnection={formJSON => {  
//             updateSavedForm(formJSON);  
//             return true; // yes, I will send form once user is online  
//             // return false; <- No, don't send a thing
// 	  }}
//         />
//       )}
//     </View>  
//   );
// };  
  
// const styles = StyleSheet.create({  
//   container: {  
//     flex: 1,  
//     backgroundColor: "#fff",  
//     alignItems: "center",  
//     justifyContent: "center"  
//   }  
// });  
  
// export default App;