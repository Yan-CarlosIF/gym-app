import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function Input({ placeholder }: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[style.input, isFocused && style.focused]}
      placeholder={placeholder}
      placeholderTextColor={isFocused ? "#d1d5db" : "#7C7C8A"}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}

const style = StyleSheet.create({
  input: {
    height: 52,
    borderRadius: 6,
    color: "#d1d5db",
    paddingHorizontal: 20,
    backgroundColor: "#121214",
    borderWidth: 1,
    borderColor: "transparent",
  },
  focused: {
    borderColor: "#00B37E",
    borderWidth: 1,
  },
});
