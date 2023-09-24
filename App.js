import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Box } from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  );
}

windowWidth = Dimensions.get("window").width
windowHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: windowWidth >  500 ? "60%" : "90%",
    height: windowHeight > 500 ? "40%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: windowWidth > 500 ? 50 : 24
  }
});
