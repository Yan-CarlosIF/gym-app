import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // mostrar o cabeçalho da tela
        animation: "slide_from_right", // animação da navegação
      }}
    />
  );
}
