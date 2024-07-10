import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";

const GoogleButton = ({  }) => {
  return (
    <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
      <Image
        style={styles.googleImage}
        source={require("../assets/images/google.png")}
      />
      <Text style={styles.googleButtonText}>Continue with Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({ 
  googleButton: {
    backgroundColor: "transparent",
    width: 300,
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
    borderColor: "#000080",
    borderWidth: 1,
    marginTop: 35,
  },
  googleButtonText: {
    marginLeft: 50,
    position: "absolute",
    left: 20,
    top: 8,
    fontSize: 18,
    color: "#000080",
    textAlign: "center",
  },
  googleImage: {
    height: 25,
    width: 25,
    position: "absolute",
    top: 10,
    left: 25,
  },
});

export default GoogleButton;
