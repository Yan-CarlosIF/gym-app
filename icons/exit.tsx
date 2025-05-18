import { Image, ImageProps } from "react-native";

export default function ExitIcon({ ...props }: ImageProps) {
  return (
    <Image
      {...props}
      width={28}
      height={28}
      source={require("../assets/icons/exit.png")}
    />
  );
}
