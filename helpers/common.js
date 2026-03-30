import { Dimensions } from "react-native";

const { width: DeviceWidth, height: DeviceHeight } = Dimensions.get("window");

export const hp = (percentage) => {
  return (percentage * DeviceHeight) / 100;
};

export const wp = (percentage) => {
  return (percentage * DeviceWidth) / 100;
};
