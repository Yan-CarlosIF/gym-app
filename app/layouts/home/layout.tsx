import BarbellIcon from "@/icons/barbell";
import HomeIcon from "@/icons/home";
import UserIcon from "@/icons/user";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

export default function HomeLayout({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  const routeName = useRoute().name;
  const router = useRouter();

  return (
    <View style={style.container}>
      <View style={style.header}>{header}</View>
      <ScrollView style={style.main}>{children}</ScrollView>
      <View style={style.footer}>
        <TouchableOpacity onPress={() => router.push("/home")}>
          <HomeIcon
            tintColor={
              routeName === "home" || routeName === "exercise"
                ? "#00B37E"
                : "#7C7C8A"
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/workouts")}>
          <BarbellIcon
            style={{
              width: 32,
              height: 32,
              tintColor: routeName === "workouts" ? "#00B37E" : "#7C7C8A",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <UserIcon
            tintColor={routeName === "profile" ? "#00B37E" : "#7C7C8A"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#202024",
  },
  header: {
    height: 148,
    display: "flex",
    flexDirection: "row",
    paddingBottom: 28,
    alignItems: "flex-end",
    paddingInline: 32,
  },
  headerText: {
    fontSize: 16,
    color: "#E1E1E6",
  },
  main: {
    backgroundColor: "#121214",
  },
  footer: {
    height: 96,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
