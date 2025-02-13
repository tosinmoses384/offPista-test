import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

export type Frame10Type = {
  style?: StyleProp<ViewStyle>;
};

const Frame10 = ({ style }: Frame10Type) => {
  return (
    <View style={[styles.image59Parent, style]}>
      <Image
        style={styles.image59Icon}
        contentFit="cover"
        source={require("../assets/30image-59.png")}
      />
      <Text style={styles.home}>Shorts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image59Icon: {
    width: 25,
    height: 25,
  },
  home: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textS,
    color: Color.accent,
    textAlign: "left",
  },
  image59Parent: {
    alignItems: "center",
    gap: Gap.gap_xs,
  },
});

export default Frame10;
