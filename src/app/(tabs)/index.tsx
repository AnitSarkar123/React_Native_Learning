import Colors from "@/src/constants/Colors";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
// import EditScreenInfo from "@/src/components/EditScreenInfo";
// import { Text, View } from "@/src/components/Themed";
//const product = products[1];
import { Image } from "react-native";
import { FlatList } from "react-native";

export default function MenueScreen() {
  const [numColumns, setNumColumns] = useState(2);
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={numColumns} //it is use instade of numColumns={2} because in this react native give an error then render the error is--> "Invariant Violation: Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component."
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
