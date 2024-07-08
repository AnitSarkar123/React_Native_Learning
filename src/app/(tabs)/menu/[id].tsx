//import liraries
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import { PizzaSize } from "@/src/types";
const sizes: PizzaSize[] = ["S", "M", "L", "XL"];
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";

// create a component
const ProductDetailsScreen = () => {
  const searchParams = useLocalSearchParams(); // Get the search params object
  const id = searchParams.id; // Extract the id from the object
  const [selectedSize, setSelectedSize] = React.useState<PizzaSize>("M");
  const { addItem } = useCart();
  const router = useRouter();
  const product = products.find((p) => p.id.toString() == id);
  // if (!product) {
  //   <Text>Data Doesn't fetch</Text>;
  // }
  const addToCart = () => {
    // console.log("Add to cart");
    if (!product) {
      return;
    }
    addItem(product, selectedSize);
    router.push("/cart");
    console.log("item added");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />

      <Image
        source={{ uri: product?.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color: selectedSize === size ? "black" : "gray",
                },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>Price: ${product?.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: "auto",
  },

  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

//make this component available to the app
export default ProductDetailsScreen;
