import { Image, ImageProps } from "react-native";

export default function ChevronRightIcon({ ...props }: ImageProps) {
  return (
    <Image {...props} source={require("../assets/icons/chevronRight.png")} />
  );
}
