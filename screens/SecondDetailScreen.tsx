import * as React from "react";
    import {ScrollView, StyleSheet, View, Text, ImageBackground} from "react-native";
import {Image} from "expo-image";
import 10icon1 from "../assets/10icon1.svg"
import 57vector from "../assets/57vector.svg"
import 11icon2 from "../assets/11icon2.svg"
import 9icon from "../assets/9icon.svg"
import 5cellularconnection from "../assets/5cellular-connection.svg"
import 56wifi1 from "../assets/56wifi1.svg"
import 1cap from "../assets/1cap.svg"
import { FontSize, Color, FontFamily, Gap, Padding, Border } from "../GlobalStyles";
    
const SecondDetailScreen = () => {

  return (
    <View style={[styles.seconddetailscreen, styles.image70IconLayout]}>
      <ScrollView style={[styles.frameParent, styles.frameFlexBox]} showsVerticalScrollIndicator={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.frameScrollViewContent}>
        <ScrollView style={[styles.frameGroup, styles.frameFlexBox]} showsVerticalScrollIndicator={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.frameScrollView1Content}>
          <View style={[styles.image70Wrapper, styles.wrapperFlexBox]}>
            <Image style={[styles.image70Icon, styles.iconLayout]} contentFit="cover" source={require("../assets/41image-70.png")} />
          </View>
          <View style={[styles.image69Wrapper, styles.wrapperFlexBox]}>
            <Image style={[styles.image70Icon, styles.iconLayout]} contentFit="cover" source={require("../assets/39image-69.png")} />
          </View>
          <View style={[styles.image68Wrapper, styles.wrapperFlexBox]}>
            <Image style={[styles.image70Icon, styles.iconLayout]} contentFit="cover" source={require("../assets/38image-68.png")} />
          </View>
          <View style={[styles.image67Wrapper, styles.wrapperFlexBox]}>
            <Image style={[styles.image70Icon, styles.iconLayout]} contentFit="cover" source={require("../assets/37image-67.png")} />
          </View>
          <View style={[styles.sidebar, styles.sidebarFlexBox]}>
            <View style={styles.buttonLike}>
              <10icon1 style={styles.icon} width={36} height={36} />
              <Text style={styles.nr}>11.5K</Text>
            </View>
            <View style={styles.buttonLike}>
              <View style={styles.icon}>
                <57vector style={[styles.vectorIcon, styles.iconLayout]} width={54} height={58} />
              </View>
              <Text style={styles.nr}>312</Text>
            </View>
            <View style={styles.buttonLike}>
              <11icon2 style={styles.icon} width={36} height={36} />
              <Text style={styles.nr}>20</Text>
            </View>
          </View>
          <View style={[styles.videoMetaData, styles.topNavBarPosition]}>
            <View style={styles.secretsBillionaireParent}>
              <Text style={styles.secretsBillionaire}>Secrets Billionaire</Text>
              <Text style={[styles.longCaption, styles.captionTypo]}>To escape a politically motivated arranged marriage, a privileged heir Lucas Walton fakes being gay and engaged to his company's new executive, unaware that his "fiancé" is actually an undercover agent investigating his family's corrupt dealings, leading to a hilarious clash of secrets, danger, and unexpected feelings.</Text>
              <Text style={styles.captionTypo}>To escape a politically motivated arranged marriage, a privileged heir Lucas...</Text>
            </View>
            <View style={styles.watchNow}>
              <View style={styles.image71Parent}>
                <Image style={styles.image71Icon} contentFit="cover" source={require("../assets/42image-71.png")} />
                <Text style={styles.watchNow1}>Watch Now</Text>
              </View>
            </View>
          </View>
          <View style={[styles.topNavBar, styles.topNavBarFlexBox]}>
            <View style={[styles.tabs, styles.wrapperFlexBox]}>
              <View style={styles.tab}>
                <Text style={[styles.text, styles.textTypo]}>Following</Text>
                <View style={styles.indicators} />
              </View>
              <View style={styles.tab1}>
                <Text style={[styles.text1, styles.textTypo]}>For You</Text>
              </View>
            </View>
            <9icon style={styles.icon3} width={32} height={32} />
          </View>
        </ScrollView>
        <View style={[styles.statusBar, styles.sidebarFlexBox]}>
          <Text style={styles.time}>9:41</Text>
          <View style={styles.icons}>
            <5cellularconnection style={styles.cellularConnectionIcon} width={19} height={12} />
            <56wifi1 style={styles.wifiIcon} width={17} height={12} />
            <View style={styles.battery}>
              <View style={styles.border} />
              <1cap style={[styles.capIcon, styles.iconLayout]} width={5} height={31} />
              <View style={styles.capacity} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>);
};

const styles = StyleSheet.create({
  frameScrollView1Content: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 10
  },
  image70IconLayout: {
    width: "100%",
    flex: 1
  },
  frameFlexBox: {
    flex: 1,
    alignSelf: "stretch"
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row"
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden"
  },
  sidebarFlexBox: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  topNavBarPosition: {
    left: 13,
    position: "absolute",
    overflow: "hidden"
  },
  captionTypo: {
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.textSemiBold_size,
    textShadowRadius: 2.14,
    textShadowOffset: {
      width: 0,
      height: 1.0719999074935913
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.m3White,
    fontFamily: FontFamily.calloutBold,
    alignSelf: "stretch"
  },
  topNavBarFlexBox: {
    gap: Gap.gap_xs,
    alignItems: "center"
  },
  textTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: FontFamily.calloutBold
  },
  homeTypo: {
    fontFamily: FontFamily.textS,
    textAlign: "left",
    fontSize: FontSize.size_xs
  },
  image70Icon: {
    alignSelf: "stretch",
    width: "100%",
    flex: 1
  },
  image70Wrapper: {
    zIndex: 0,
    height: 771,
    alignItems: "center",
    alignSelf: "stretch"
  },
  image69Wrapper: {
    zIndex: 1,
    height: 771,
    alignItems: "center",
    alignSelf: "stretch"
  },
  image68Wrapper: {
    zIndex: 2,
    height: 771,
    alignItems: "center",
    alignSelf: "stretch"
  },
  image67Wrapper: {
    zIndex: 3,
    height: 771,
    alignItems: "center",
    alignSelf: "stretch"
  },
  icon: {
    overflow: "hidden"
  },
  nr: {
    lineHeight: 12,
    textAlign: "center",
    fontFamily: FontFamily.calloutBold,
    fontSize: FontSize.size_xs,
    color: Color.m3White
  },
  buttonLike: {
    justifyContent: "center",
    alignItems: "center"
  },
  vectorIcon: {
    top: "20.83%",
    right: "20.83%",
    bottom: "20.83%",
    left: "25%",
    position: "absolute"
  },
  sidebar: {
    top: 139,
    left: 291,
    height: 246,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_9xl,
    zIndex: 4,
    position: "absolute",
    overflow: "hidden"
  },
  secretsBillionaire: {
    fontSize: FontSize.calloutBold_size,
    lineHeight: 23,
    fontWeight: "700",
    height: 24,
    textShadowRadius: 2.14,
    textShadowOffset: {
      width: 0,
      height: 1.0719999074935913
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.m3White,
    fontFamily: FontFamily.calloutBold,
    alignSelf: "stretch"
  },
  longCaption: {
    display: "none"
  },
  secretsBillionaireParent: {
    height: 62,
    justifyContent: "flex-end",
    gap: Gap.gap_2xs,
    alignSelf: "stretch"
  },
  image71Icon: {
    height: 13,
    width: 17
  },
  watchNow1: {
    fontSize: FontSize.size_mini,
    display: "flex",
    width: 92,
    height: 16,
    fontWeight: "600",
    lineHeight: 22,
    textAlign: "center",
    color: Color.m3White,
    fontFamily: FontFamily.calloutBold,
    justifyContent: "center",
    alignItems: "center"
  },
  image71Parent: {
    top: 0,
    left: 0,
    borderRadius: Border.br_6xs_4,
    backgroundColor: Color.accent,
    paddingHorizontal: 43,
    paddingVertical: 7,
    position: "absolute",
    flexDirection: "row"
  },
  watchNow: {
    width: 195,
    height: 30
  },
  videoMetaData: {
    top: 345,
    width: 338,
    gap: 13,
    zIndex: 5
  },
  text: {
    color: Color.colorGray_100,
    fontWeight: "600"
  },
  indicators: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorCrimson_100,
    width: 8,
    height: 8,
    overflow: "hidden"
  },
  tab: {
    display: "none",
    gap: Gap.gap_2xs,
    flexDirection: "row"
  },
  text1: {
    fontWeight: "800",
    color: Color.m3White,
    letterSpacing: -1
  },
  tab1: {
    display: "none",
    flexDirection: "row"
  },
  tabs: {
    width: 60,
    height: 22,
    gap: Gap.gap_xl,
    display: "none"
  },
  icon3: {
    overflow: "hidden"
  },
  topNavBar: {
    top: 73,
    width: 390,
    height: 43,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_9xs,
    zIndex: 6,
    left: 13,
    position: "absolute",
    overflow: "hidden",
    flexDirection: "row"
  },
  frameGroup: {
    alignSelf: "stretch"
  },
  time: {
    letterSpacing: 0,
    width: 80,
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    lineHeight: 22,
    textAlign: "center",
    color: Color.m3White,
    fontFamily: FontFamily.calloutBold
  },
  cellularConnectionIcon: {},
  wifiIcon: {},
  border: {
    height: "100%",
    width: "91.58%",
    top: "0%",
    right: "8.42%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_9xs_5,
    borderStyle: "solid",
    borderColor: Color.m3White,
    borderWidth: 1,
    opacity: 0.35,
    position: "absolute"
  },
  capIcon: {
    top: "36.15%",
    right: "0%",
    bottom: "33.08%",
    left: "95.24%",
    position: "absolute"
  },
  capacity: {
    height: "69.23%",
    width: "76.92%",
    top: "15.38%",
    right: "15.75%",
    bottom: "15.38%",
    left: "7.33%",
    borderRadius: Border.br_11xs_3,
    backgroundColor: Color.m3White,
    position: "absolute"
  },
  battery: {
    width: 27,
    height: 13
  },
  icons: {
    gap: Gap.gap_lg,
    flexDirection: "row"
  },
  statusBar: {
    height: 48,
    paddingLeft: Padding.p_8xl,
    paddingTop: Padding.p_lg,
    paddingRight: Padding.p_7xl,
    paddingBottom: Padding.p_sm,
    display: "none",
    flexDirection: "row",
    alignSelf: "stretch"
  },
  frameParent: {
    alignSelf: "stretch"
  },
  seconddetailscreen: {
    backgroundColor: Color.colorMediumblue,
    height: 844,
    overflow: "hidden"
  }
});

export default SecondDetailScreen;
