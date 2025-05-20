import ChevronRightIcon from "@/icons/chevron-right";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface WorkoutLabelProps extends TouchableOpacityProps {
  workoutName: string;
}

export default function WorkoutLabel({
  workoutName,
  ...props
}: WorkoutLabelProps) {
  return (
    <TouchableOpacity
      {...props}
      style={{
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 24,
        paddingVertical: 18,
        backgroundColor: "#29292E",
        borderRadius: 8,
        justifyContent: "space-between",
      }}
    >
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
        {workoutName}
      </Text>
      <ChevronRightIcon />
    </TouchableOpacity>
  );
}
