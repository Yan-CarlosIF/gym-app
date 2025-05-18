import { StyleSheet, Text } from "react-native";
import HomeLayout from "./layouts/home/layout";

export default function ProfileScreen() {
  return (
    <HomeLayout header={<Text style={style.headerText}>Perfil</Text>}>
      <Text>Profile</Text>
    </HomeLayout>
  );
}

const style = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E1E1E6",
  },
});
