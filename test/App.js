import * as React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Pressable, ActivityIndicator, Alert, Dimensions} from "react-native";

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: "blue",
    flex: 1,
  },
  textContainer:{
    backgroundColor: "white",
  },
  text:{
    // marginTop: 80,
    // marginBottom:80,
    marginVertical : 80
  },
  text1:{
    fontSize: 30,
  },
  text2:{
    textAlign: "center",
  },
  text3:{
    fontWeight: "bold",
   
  },
  image:{
    width: 100, 
    height:30, 
    padding:20, 
    margin: 20,
    backgroundColor: "white"
  },
  button: {
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',

  },
});

const dimensions= Dimensions.get("window"),

const App = () =>{
  
  return (
    <ScrollView style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.text1]}>Mon app</Text>
          <Text style={[styles.text, styles.text2]}>Mon titre</Text>
          <Text style={[styles.text, styles.text3]}>Description</Text>
        </View>

        <Image source={require("./konexio-logo_1.png")} style={styles.image}  /> 

        <Image
          source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
          style={styles.image}/>    
       
       <Pressable
          style={({pressed}) => [{backgroundColor: pressed ? 'grey':'white'},styles.button,]}
          onPress={() => Alert.alert('Button Pressed!')}>
          <Text style={styles.buttonText}>Cliquez moi</Text>
          <ActivityIndicator/>
        </Pressable>
   
    </ScrollView>

  
  )

  
}
export default App;