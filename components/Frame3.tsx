import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

export type Frame3Type = {
  style?: StyleProp<ViewStyle>;
};

const Frame3 = ({ style }: Frame3Type) => {
  return (
    <View style={[styles.image65Parent, style]}>
      <Image
        style={styles.image65Icon}
        contentFit="cover"
        source={require("../assets/36image-65.png")}
      />
      <Text style={styles.profile}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image65Icon: {
    width: 25,
    height: 25,
  },
  profile: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textS,
    color: Color.colorIndianred,
    textAlign: "left",
  },
  image65Parent: {
    alignItems: "center",
    gap: Gap.gap_xs,
  },
});

export default Frame3;
