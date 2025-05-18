import ExitIcon from "@/icons/exit";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomeLayout from "./layouts/home/layout";

function Header() {
  const router = useRouter();

  return (
    <View style={style.headerConteiner}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
        }}
      >
        <Image
          width={64}
          height={64}
          style={{
            borderRadius: 50,
            borderWidth: 3,
            borderColor: "#323238",
          }}
          source={{ uri: "https://github.com/yan-carlosif.png" }}
        />
        <View>
          <Text style={style.headerText}>Olá,</Text>
          <Text style={[style.headerText, { fontWeight: "bold" }]}>
            Yan Carlos
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.replace("/login")}
        style={{ marginLeft: "auto" }}
      >
        <ExitIcon />
      </TouchableOpacity>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <HomeLayout header={<Header />}>
      <Text>Home</Text>
    </HomeLayout>
  );
}

const style = StyleSheet.create({
  headerConteiner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    fontSize: 16,
    color: "#E1E1E6",
  },
});
