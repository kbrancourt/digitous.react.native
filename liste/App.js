import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text , Image, Dimensions} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const dim = Dimensions.get('window');
const width = dim.width;
const height = dim.height;

const App =() =>{
    
  const [countries,setCountries]= useState([]);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((reponse) => {
        console.log("reponse",reponse)
        setCountries(reponse)})
        .catch((error) => console.error(error))
      });

  return (
    <View style={styles.container}>
       <FlatList
        data={countries}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
          <View style={styles.flatStyle}>
            <Text style={styles.textStyle}>
              <View>
                  <b>Pays:</b>{item.name}
              </View>
            </Text>
            <Text style={styles.textStyle}>
              <View>
                  <b>Capital:</b>{item.capital}
              </View>
            </Text>
            <Image source={item.flag} style={{width: 200, height: 150, margin: "auto"}}/>
          </View>
        )}/>
      
    </View>
  )
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatStyle:{
    height: "auto",
    width: "auto",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#4DC7DE",
    borderRadius: 10,
    textAlign: "center",
  },
  textStyle:{
    fontSize:22,
    padding: 16,
  }
 
});

export default App;