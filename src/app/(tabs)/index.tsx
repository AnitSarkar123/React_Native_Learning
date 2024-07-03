import Colors from "@/src/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
// import EditScreenInfo from "@/src/components/EditScreenInfo";
// import { Text, View } from "@/src/components/Themed";
//const product = products[1];
import { Image } from "react-native";

export default function TabOneScreen() {
  return (
    <View>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}
