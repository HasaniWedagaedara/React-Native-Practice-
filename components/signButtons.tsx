import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";

interface ButtonProps extends TouchableOpacityProps{
  text:string;
}

const SignButton:React.FC<ButtonProps> = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000080",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#f8f8ff",
    textAlign: "center",
  },
});

export default SignButton;
