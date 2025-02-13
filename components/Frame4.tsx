import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

export type Frame4Type = {
  style?: StyleProp<ViewStyle>;
};

const Frame4 = ({ style }: Frame4Type) => {
  return (
    <View style={[styles.image64Parent, style]}>
      <Image
        style={styles.image64Icon}
        contentFit="cover"
        source={require("../assets/34image-642.png")}
      />
      <Text style={styles.home}>Reward</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image64Icon: {
    width: 25,
    height: 25,
  },
  home: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textS,
    color: Color.gray99,
    textAlign: "left",
  },
  image64Parent: {
    alignItems: "center",
    gap: Gap.gap_xs,
  },
});

export default Frame4;
