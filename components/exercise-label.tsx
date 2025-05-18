import ChevronRightIcon from "@/icons/chevron-right";
import { Image, Text, TouchableOpacity, View } from "react-native";

// type ExerciseLabelProps = {
//   exerciseName: string;
//   series: number;
//   repetitions: number;
//   icon?: NodeRequire;
// };

export default function ExerciseLabel() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: "#29292E",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 8,
        padding: 8,
        gap: 24,
      }}
    >
      <Image
        style={{ width: 67, height: 67, borderRadius: 6 }}
        source={require("../assets/images/icon.png")}
      />
      <View style={{ display: "flex", gap: 6 }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Nome Exercicio
        </Text>
        <Text style={{ color: "#C4C4CC", fontSize: 14 }}>
          3 series x 12 repetições
        </Text>
      </View>
      <ChevronRightIcon style={{ marginLeft: "auto" }} width={24} height={24} />
    </TouchableOpacity>
  );
}
