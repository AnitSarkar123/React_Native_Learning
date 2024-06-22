import Colors from "@/src/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import products from "@/assets/data/products";
// import EditScreenInfo from "@/src/components/EditScreenInfo";
// import { Text, View } from "@/src/components/Themed";
const product = products[0];
import { Image } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}> {product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    //color: "blue",
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
