import { StyleSheet, Text, Pressable , View} from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { hp, wp } from "../helpers/common";
import Loading from "./Loading";

const Button = ({
  buttonStyle,
  title = "",
  textStyle,
  onPress = () => {},
  loading = false,
  hasShadow = true,
}) => {
  const shadowStyle = {
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  };

  if (loading) {
    return (
      <View
        style={[styles.button, buttonStyle, { backgroundColor: "white" }]}
      >
        <Loading />
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
    >
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    height: hp(6.6),
    borderCurve: "continuous",
    borderRadius: theme.radius.xl,
  },
  title: {
    color: "white",
    fontSize: hp(2.5),
    fontWeight: theme.fonts.bold,
  },
});
