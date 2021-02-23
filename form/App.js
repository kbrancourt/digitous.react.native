import * as React from "react";
import {View, Text, StyleSheet, Pressable,  Dimensions} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
    alignItems: "centercenter",
    justifyContent: "center",
  },
  formContainer:{
    width: "auto",
    paddingVertical: 10,
    backgroundColor: "white",
    marginHorizontal: 30,
  },
  title:{
    fontSize: 50,
    fontWeight: "bold",
    color: "black",
    marginHorizontal:"auto",
    marginVertical: 100,
  },
  text:{
    border: "2px solid black",
    width: "100%",
    height: 50,
    marginVertical: 10,
    marginBottom: 16,
  },
  button:{
    width: 80,
    height: 40,
    backgroundColor: "black",
    color:"white",
    padding: 10,
    marginVertical: 20,
    marginHorizontal: "auto",
    textAlign: "center",
  }
})

const dimensions = Dimensions.get("window");

const Formulaire = () => {
    
      return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue</Text>
            <View style={styles.formContainer}>
              <TextInput style={styles.text} icon='mail' placeholder="Entrer votre e-mail" keyboardType="email-address"/>
            </View> 
            <View style={styles.formContainer}>
              <TextInput style={styles.text} icon='key' placeholder="Entrer votre mot de passe" secureTextEntry
          autoCompleteType='password'/>
              <Pressable style={styles.button} onPress={() => true}>Login</Pressable>
            </View>
        </View>
      );
    }
  
  
  export default Formulaire;