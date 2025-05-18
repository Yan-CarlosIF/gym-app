import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  style?: StyleProp<ViewStyle>;
}

export default function Button({
  children,
  variant = "primary",
  style,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={
        variant === "primary"
          ? [styles.primaryButton, style]
          : [styles.secondaryButton, style]
      }
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    backgroundColor: "#00875F",
    borderRadius: 6,
  },
  secondaryButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderWidth: 1,
    borderColor: "#00875F",
    borderRadius: 6,
  },
});
