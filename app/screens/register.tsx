import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import Input from "../components/input";
import AuthLayout from "../layouts/auth/layout";

export default function Register({ navigation }: any) {
  return (
    <AuthLayout>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Crie sua conta</Text>

        <Input placeholder="Nome" />

        <Input placeholder="Email" />

        <Input placeholder="Senha" />

        <Input placeholder="Confirmar senha" />

        <Button variant="primary">
          <Text style={styles.primaryButtonText}>Criar conta</Text>
        </Button>
      </View>
      <Button
        variant="outline"
        onPress={() => navigation.navigate("Login")}
        style={{ marginHorizontal: 40, marginTop: "auto" }}
      >
        <Text style={styles.secondaryButtonText}>Voltar ao login</Text>
      </Button>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: -375,
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
