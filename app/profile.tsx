import Button from "@/components/button";
import Input from "@/components/input";
import { Image, StyleSheet, Text, View } from "react-native";
import HomeLayout from "./layouts/home/layout";

export default function ProfileScreen() {
  return (
    <HomeLayout header={<Text style={style.headerText}>Perfil</Text>}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginVertical: 20,
        }}
      >
        <Image
          style={style.avatar}
          source={{ uri: "https://github.com/yan-carlosif.png" }}
        />
        <Text style={{ color: "#00B37E", fontSize: 16, fontWeight: "bold" }}>
          Alterar foto
        </Text>
      </View>
      <View style={{ display: "flex", gap: 16, paddingHorizontal: 40 }}>
        <Input style={{ backgroundColor: "#202024" }} placeholder="Nome" />
        <Input style={{ backgroundColor: "#202024" }} placeholder="Email" />
        <View style={{ display: "flex", marginTop: 8 }}>
          <Text style={{ color: "#C4C4CC", fontSize: 16, fontWeight: "bold" }}>
            Alterar senha
          </Text>
          <Input
            style={{ backgroundColor: "#202024", marginTop: 8 }}
            placeholder="Senha antiga"
          />
          <Input
            style={{ backgroundColor: "#202024", marginTop: 16 }}
            placeholder="Nova senha"
          />
        </View>
        <Button variant="primary">
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            Atualizar
          </Text>
        </Button>
      </View>
    </HomeLayout>
  );
}

const style = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E1E1E6",
    textAlign: "center",
    width: "100%",
  },
  avatar: {
    width: 148,
    height: 148,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: "#323238",
  },
});
