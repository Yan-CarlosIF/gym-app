import { TextInput } from "react-native";

type InputProps = {
  placeholder: string;
};

export default function Input({ placeholder }: InputProps) {
  return (
    <TextInput
      style={{
        height: 52,
        borderRadius: 6,
        color: "#d1d5db",
        paddingHorizontal: 20,
        backgroundColor: "#121214",
      }}
      placeholder={placeholder}
      placeholderTextColor="#d1d5db"
    />
  );
}
