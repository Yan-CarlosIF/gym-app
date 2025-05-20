import { Image, ImageProps } from "react-native";

export default function HumanIcon({ ...props }: ImageProps) {
  return <Image {...props} source={require("../assets/icons/human.png")} />;
}
