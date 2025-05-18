import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import Input from "../components/input";
import AuthLayout from "./layouts/auth/layout";

export default function Login() {
  const router = useRouter();

  return (
    <AuthLayout>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Acesse sua conta</Text>

        <Input placeholder="Email" />

        <Input placeholder="Senha" />

        <Button variant="primary" onPress={() => router.push("/home")}>
          <Text style={styles.primaryButtonText}>Acessar</Text>
        </Button>
      </View>
      <View style={{ marginTop: "auto", display: "flex", gap: 12 }}>
        <Text style={{ color: "#d1d5db", textAlign: "center" }}>
          Ainda não tem acesso?
        </Text>
        <Button
          variant="outline"
          onPress={() => router.push("/register")}
          style={{ marginHorizontal: 40 }}
        >
          <Text style={styles.secondaryButtonText}>Criar conta</Text>
        </Button>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: -290,
    paddingHorizontal: 40,
    gap: 16,
  },
  formTitle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  primaryButtonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
  secondaryButtonText: {
    fontWeight: "bold",
    color: "#00875F",
    fontSize: 16,
  },
});
