import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

export type FrameType = {
  style?: StyleProp<ViewStyle>;
};

const Frame = ({ style }: FrameType) => {
  return (
    <View style={[styles.image63Parent, style]}>
      <Image
        style={styles.image63Icon}
        contentFit="cover"
        source={require("../assets/33image-63.png")}
      />
      <Text style={styles.home}>Shorts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image63Icon: {
    width: 25,
    height: 25,
  },
  home: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textS,
    color: Color.gray99,
    textAlign: "left",
  },
  image63Parent: {
    alignItems: "center",
    gap: Gap.gap_xs,
  },
});

export default Frame;
