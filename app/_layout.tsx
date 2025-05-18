import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="login"
      screenOptions={{
        headerShown: false, // mostrar o cabeçalho da tela
        animation: "fade_from_bottom", // animação da navegação
      }}
    />
  );
}
