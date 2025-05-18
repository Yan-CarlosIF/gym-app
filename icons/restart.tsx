import { Image, ImageProps } from "react-native";

export default function RestartIcon({ ...props }: ImageProps) {
  return (
    <Image
      {...props}
      width={32}
      height={32}
      source={require("../assets/icons/restart.png")}
    />
  );
}
