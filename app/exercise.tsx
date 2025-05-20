import Button from "@/components/button";
import ChevronRightIcon from "@/icons/chevron-right";
import HumanIcon from "@/icons/human";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HomeLayout from "./layouts/home/layout";

export function Header({ exerciseName }: { exerciseName: string }) {
  const router = useRouter();

  return (
    <View>
      <TouchableOpacity onPress={() => router.back()}>
        <ChevronRightIcon
          style={{
            transform: [{ rotate: "180deg" }],
            tintColor: "#00B37E",
            width: 24,
            height: 24,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginTop: 12,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#E1E1E6" }}>
          {exerciseName}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <HumanIcon />
          <Text style={{ fontSize: 16, color: "#C4C4CC" }}>Pernas</Text>
        </View>
      </View>
    </View>
  );
}

export default function ExerciseScreen() {
  const { exerciseName } = useLocalSearchParams() as { exerciseName: string };
  const router = useRouter();

  return (
    <HomeLayout header={<Header exerciseName={exerciseName} />}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
          paddingHorizontal: 40,
          marginTop: 32,
        }}
      >
        <Image
          source={require("../assets/images/icon.png")}
          style={{
            width: "100%",
            height: 300,
            margin: "auto",
            borderRadius: 8,
          }}
        />
        <Button
          variant="primary"
          style={{ width: "100%" }}
          onPress={() => router.push("/workouts")}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            Ver treinos
          </Text>
        </Button>
      </View>
    </HomeLayout>
  );
}
