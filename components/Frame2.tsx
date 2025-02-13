import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

export type Frame2Type = {
  style?: StyleProp<ViewStyle>;
};

const Frame2 = ({ style }: Frame2Type) => {
  return (
    <View style={[styles.image65Parent, style]}>
      <Image
        style={styles.image65Icon}
        contentFit="cover"
        source={require("../assets/36image-65.png")}
      />
      <Text style={styles.home}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image65Icon: {
    width: 25,
    height: 25,
  },
  home: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textS,
    color: Color.gray99,
    textAlign: "left",
  },
  image65Parent: {
    alignItems: "center",
    gap: Gap.gap_xs,
  },
});

export default Frame2;
