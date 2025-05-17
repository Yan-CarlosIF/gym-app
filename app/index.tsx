import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/login";
import Register from "./screens/register";

// navigation/types.ts
export type RootStackParamList = {
  Login: undefined; // tela Login não espera parâmetros
  Register: undefined; // tela Register não espera parâmetros
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
