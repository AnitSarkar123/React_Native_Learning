//import liraries
import { useLocalSearchParams } from "expo-router";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const ProductDetailsScreen = () => {
  const searchParams = useLocalSearchParams(); // Get the search params object
  const id = searchParams.id; // Extract the id from the object

  return (
    <View style={styles.container}>
      <Text>ProductDetailsScreen for id:{id}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

//make this component available to the app
export default ProductDetailsScreen;
