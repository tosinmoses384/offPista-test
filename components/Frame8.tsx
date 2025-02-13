import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

export type Frame8Type = {
  style?: StyleProp<ViewStyle>;
};

const Frame8 = ({ style }: Frame8Type) => {
  return (
    <View style={[styles.iconhomeParent, style]}>
      <Image
        style={styles.iconhome}
        contentFit="cover"
        source={require("../assets/12iconhome.png")}
      />
      <Text style={styles.home}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconhome: {
    width: 24,
    height: 23,
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textS,
    color: Color.gray99,
    textAlign: "left",
  },
  iconhomeParent: {
    alignItems: "center",
    gap: Gap.gap_xs,
  },
});

export default Frame8;
