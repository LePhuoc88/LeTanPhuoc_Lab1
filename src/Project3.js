import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Project3() {
  return (
    <View style={myStyles.container}>
      <TouchableOpacity style={{ ...myStyles.button, backgroundColor: "red" }}>
        <Text style={{ ...myStyles.text}}>Say hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...myStyles.button, backgroundColor: "blue" }}>
        <Text style={{ ...myStyles.text}}>Say GoodBye</Text>
      </TouchableOpacity>
    </View>
  );
}

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    height: 60,
    justifyContent: "center",
    padding: 20,
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  }
});
