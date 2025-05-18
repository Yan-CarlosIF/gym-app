import { StyleSheet, Text } from "react-native";
import HomeLayout from "./layouts/home/layout";

export default function WorkoutsScreen() {
  return (
    <HomeLayout header={<Text style={style.headerText}>Treinos</Text>}>
      <Text>Workouts</Text>
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
