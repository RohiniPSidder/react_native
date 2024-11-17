import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from "react-native";

export default function HomeScreen({navigation}) {

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.homeText}>Hungry?</Text>
        <Text style={styles.text}>We've got you covered</Text>
      </View>
      <ScrollView horizontal>
        <Pressable style={styles.box} onPress={()=>navigation.navigate("Appetizers")}>
          <Image
            source={require('../assets/appetizers/appetizer.jpeg')} 
            style={styles.image} 
          />
          <Text style={styles.boxText}>Appetizers</Text>
        </Pressable>
        <Pressable style={styles.box} onPress={()=>navigation.navigate("Main Course")}>
          <Image
            source={require('../assets/appetizers/appetizer.jpeg')} 
            style={styles.image}
          />
          <Text style={styles.boxText}>Main Course</Text>
        </Pressable>
        <Pressable style={styles.box} onPress={()=>navigation.navigate("Desserts")}>
          <Image
            source={require('../assets/appetizers/appetizer.jpeg')} 
            style={styles.image}
          />
          <Text style={styles.boxText}>Desserts</Text>
        </Pressable>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1, 
    backgroundColor: "#D9BCF2",
    justifyContent: "center",
    padding:10
  },
  container: {
    alignItems: "center",
  },
  homeText: {
    fontSize: 70,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 100,
    textAlign: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 70,
    textAlign: "center",
  },
  box: {
    width: 250,
    height: 250,
    padding: 10,
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
    borderWidth:1
  },
});
