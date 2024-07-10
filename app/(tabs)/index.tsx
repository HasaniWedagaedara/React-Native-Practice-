import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import GoogleButton from "@/components/googleButton";
import SignButton from "@/components/signButtons";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const backgroundImageUrl =
    "https://i.pinimg.com/originals/96/02/61/96026156d6f45c6cc09ef8d31e4599a7.jpg";
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: backgroundImageUrl }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container2}>
          <Text style={styles.login}>Welcome!🎉</Text>
          <Text style={styles.text}>Sign in to continue...</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible}
              />
              <TouchableOpacity
                style={styles.icon}
                onPress={() => setPasswordVisible(!isPasswordVisible)}
              >
                <Icon
                  name={isPasswordVisible ? "eye" : "eye-off"}
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </View>

          <Link href="/details" style={styles.forgot}>
            Forgot Password?
          </Link>
          <SignButton text="Sign In"/>
          <GoogleButton />

          <Text style={styles.UserText}>
            New User?{"  "}
            <Link href="/signUp" style={styles.signUp}>
              Sign Up
            </Link>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f8f8ff",
  },
  container2: {
    margin: 40,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f8f8ff",
    width: "90%",
    height: "50%",
    padding: 20,
    borderRadius: 20,
    opacity: 0.9,
  },
  login: {
    marginTop: 60,
    fontSize: 40,
    color: "#000080",
  },
  text: {
    marginBottom: 30,
    fontSize: 20,
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 4,
    color: "#333",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#000080",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    resizeMode: "cover",
    alignItems: "center",
  },
  forgot: {
    position: "absolute",
    top: 360,
    left: 20,
  },
  icon: {
    right: 35,
    marginBottom: 12,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  UserText: {
    fontSize: 15,
    color: "#000080",
    marginTop: 20,
  },
  signUp: {
    fontSize: 18,
  },
});
