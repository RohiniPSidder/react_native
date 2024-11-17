import React from "react";
import { View, Text, StyleSheet, Pressable ,Image, ScrollView} from "react-native";

export default function DessertsScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.box} >
          <Image source={require("../assets/dessert/brownie.jpeg")} style={styles.image} />
          <Text style={styles.boxText}>brownie</Text>
          <View style={styles.add}>
          <Text style={styles.price}>120</Text>
          <Pressable style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          </View>
        </View>
        <View style={styles.box} >
          <Image source={require("../assets/dessert/cheesecake.jpeg")} style={styles.image} />
          <Text style={styles.boxText}>Cheesecake</Text>
          <View style={styles.add}>
          <Text style={styles.price}>120</Text>
          <Pressable style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          </View>
        </View>
        <View style={styles.box} >
          <Image source={require("../assets/dessert/cookie.jpeg")} style={styles.image} />
          <Text style={styles.boxText}>Cookie</Text>
          <View style={styles.add}>
          <Text style={styles.price}>120</Text>
          <Pressable style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          </View>
        </View>
        <View style={styles.box} >
          <Image source={require("../assets/dessert/mousse.jpeg")} style={styles.image} />
          <Text style={styles.boxText}>Mousse</Text>
          <View style={styles.add}>
          <Text style={styles.price}>120</Text>
          <Pressable style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          </View>
        </View>
        <View style={styles.box} >
          <Image source={require("../assets/dessert/pudding.jpeg")} style={styles.image} />
          <Text style={styles.boxText}>Mousse</Text>
          <View style={styles.add}>
          <Text style={styles.price}>120</Text>
          <Pressable style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          </View>
        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  box: {
    width: 300,
    height: 300,
    padding: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
  image: {
    width: "90%",
    height: "70%",
    resizeMode: "cover",
    borderRadius: 5,
    borderColor:"black",
    borderWidth:1,
    marginTop:10
  },
  add: {
    flexDirection: "row",
    width: "100%", 
    justifyContent:"space-evenly",
    padding:10
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:20
  },
  button: {
    backgroundColor: "#008CBA", 
    paddingVertical: 10, 
    paddingHorizontal: 20,
    borderRadius: 5, 
    alignItems: "center", 
    justifyContent: "center",
  },
});
