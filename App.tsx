import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/frontpic.jpg')} style={styles.frontPic}>
      <Text style={styles.titleText}>Share Chat</Text>
      </ImageBackground>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frontPic: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    marginBottom: 10,
    
  },
  titleText: {
    marginBottom: 20,
    fontSize: 70,
    fontWeight: 'bold',
    color: 'blue',
  },
});
