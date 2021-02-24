import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';




const List =() => {
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
                  <b>Pays:</b> {item.name}
              </View>
            </Text>
            <Text style={styles.textStyle}>
              <View>
                  <b>Capital: </b>{item.capital}
              </View>
            </Text>
            <Image source={item.flag} style={{width: 200, height: 150, marginVertical: 24}}/>
          </View>
        )}/>
    </View>
  );
}


export default List;