import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Barbell from "../../../icons/barbell";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../../assets/images/back.png")}
        resizeMode="cover"
      >
        <View style={styles.headerContainer}>
          <Barbell />
          <Text style={styles.headerText}>Ignite Gym</Text>
        </View>
        <Text style={styles.subtitle}>Faça seus próprios treinos</Text>
      </ImageBackground>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    paddingBottom: 40,
  },
  backgroundImage: {
    paddingTop: 100,
    height: 700,
    width: "100%",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    color: "#d1d5db",
  },
});
