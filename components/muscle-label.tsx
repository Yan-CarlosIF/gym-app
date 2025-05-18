import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface MuscleLabelProps extends TouchableOpacityProps {
  muscleName: string;
  isActive: boolean;
}

export default function MuscleLabel({
  muscleName,
  isActive,
}: MuscleLabelProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        backgroundColor: "#202024",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: isActive ? "#00B37E" : "transparent",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: isActive ? "#00B37E" : "#C4C4CC",
          fontWeight: "bold",
          lineHeight: 20,
        }}
      >
        {muscleName}
      </Text>
    </TouchableOpacity>
  );
}
