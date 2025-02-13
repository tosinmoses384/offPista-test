import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

export type Frame1Type = {
  style?: StyleProp<ViewStyle>;
};

const Frame1 = ({ style }: Frame1Type) => {
  return (
    <View style={[styles.image62Parent, style]}>
      <Image
        style={styles.image62Icon}
        contentFit="cover"
        source={require("../assets/32image-62.png")}
      />
      <Text style={styles.home}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image62Icon: {
    width: 25,
    height: 25,
  },
  home: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textS,
    color: Color.accent,
    textAlign: "left",
  },
  image62Parent: {
    alignItems: "center",
    gap: Gap.gap_xs,
  },
});

export default Frame1;
