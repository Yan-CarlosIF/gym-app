import { Image, ImageProps } from "react-native";

export default function BarbellIcon({ ...props }: ImageProps) {
  return <Image {...props} source={require("../assets/images/barbell.png")} />;
}
