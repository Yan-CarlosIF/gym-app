import WorkoutLabel from "@/components/workout-label";
import { ScrollView, StyleSheet, Text } from "react-native";
import HomeLayout from "./layouts/home/layout";

export default function WorkoutsScreen() {
  return (
    <HomeLayout header={<Text style={style.headerText}>Treinos</Text>}>
      <ScrollView
        contentContainerStyle={{ padding: 32, display: "flex", gap: 24 }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <WorkoutLabel workoutName={`Treino ${index + 1}`} key={index} />
        ))}
      </ScrollView>
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
});
