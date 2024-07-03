import Colors from "@/src/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import products from "@/assets/data/products";
import { Product } from "@/src/types";
// import EditScreenInfo from "@/src/components/EditScreenInfo";
// import { Text, View } from "@/src/components/Themed";
//const product = products[1];
import { Image } from "react-native";
const defaultPizzaimage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png";
type ProductListItemProps = () => {
  product: Product;
};
const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.image || defaultPizzaimage }}
      />
      <Text style={styles.title}> {product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};
export default ProductListItem;
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
