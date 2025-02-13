import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

export type Frame5Type = {
  style?: StyleProp<ViewStyle>;
};

const Frame5 = ({ style }: Frame5Type) => {
  return (
    <View style={[styles.image64Parent, style]}>
      <Image
        style={styles.image64Icon}
        contentFit="cover"
        source={require("../assets/35image-64.png")}
      />
      <Text style={styles.reward}>Reward</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image64Icon: {
    width: 25,
    height: 25,
  },
  reward: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textS,
    color: Color.colorIndianred,
    textAlign: "left",
  },
  image64Parent: {
    alignItems: "center",
    gap: Gap.gap_xs,
  },
});

export default Frame5;
