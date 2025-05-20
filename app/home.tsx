import ExerciseLabel from "@/components/exercise-label";
import MuscleLabel from "@/components/muscle-label";
import ExitIcon from "@/icons/exit";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
            borderRadius: 99,
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
  const router = useRouter();

  return (
    <HomeLayout header={<Header />}>
      <ScrollView
        contentContainerStyle={style.musclesView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <MuscleLabel muscleName="Costas" isActive={true} />
        <MuscleLabel muscleName="Costas" isActive={false} />
        <MuscleLabel muscleName="Costas" isActive={false} />
        <MuscleLabel muscleName="Costas" isActive={false} />
        <MuscleLabel muscleName="Costas" isActive={false} />
      </ScrollView>
      <View style={style.titleConteiner}>
        <Text
          style={{
            fontSize: 16,
            color: "#C4C4CC",
            fontWeight: "bold",
          }}
        >
          Exercícios
        </Text>
        <Text style={{ fontSize: 14, color: "#C4C4CC" }}>4</Text>
      </View>
      <ScrollView contentContainerStyle={style.exerciseConteiner}>
        {Array.from({ length: 4 }).map((_, index) => (
          <ExerciseLabel
            key={index}
            exerciseName={`Exercicio ${index}`}
            onPress={() =>
              router.push(`/exercise?exerciseName=Exercicio${index}`)
            }
          />
        ))}
      </ScrollView>
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
  musclesView: {
    paddingLeft: 32,
    marginVertical: 40,
    gap: 12,
    paddingRight: 8,
  },
  titleConteiner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  exerciseConteiner: {
    display: "flex",
    gap: 16,
    alignItems: "center",
    paddingHorizontal: 32,
    marginVertical: 8,
  },
});
