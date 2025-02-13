import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ThirdScreen = () => {
  return (
    <ScrollView style={styles.thirdscreen}>
      <ScrollView
        style={styles.layout}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.layoutScrollViewContent}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layoutScrollViewContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  homeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.textS,
    fontSize: FontSize.size_xs,
  },
  layout: {
    alignSelf: "stretch",
    flex: 1,
  },
  thirdscreen: {
    backgroundColor: Color.black,
    width: "100%",
    maxWidth: "100%",
    flex: 1,
  },
});

export default ThirdScreen;
