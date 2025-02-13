import * as React from "react";
    import {StyleSheet, View, Text} from "react-native";
import {Image} from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import 5cellularconnection from "../assets/5cellular-connection.svg"
import 56wifi1 from "../assets/56wifi1.svg"
import 1cap from "../assets/1cap.svg"
import 9icon from "../assets/9icon.svg"
import 10icon1 from "../assets/10icon1.svg"
import 57vector from "../assets/57vector.svg"
import 11icon2 from "../assets/11icon2.svg"
import 58polygon2 from "../assets/58polygon-2.svg"
import { FontFamily, Color, FontSize, Border, Gap, Padding } from "../GlobalStyles";
    
const Feed = () => {

  return (
    <View style={styles.feed}>
      <View style={[styles.videoWindow, styles.carouselPosition]}>
        <View style={[styles.carousel, styles.carouselPosition]}>
          <View style={[styles.carouselChild, styles.carouselLayout]} />
          <View style={[styles.carouselItem, styles.carouselLayout]} />
          <View style={[styles.carouselInner, styles.carouselLayout]} />
          <View style={[styles.videoView, styles.carouselLayout]} />
        </View>
      </View>
      <View style={[styles.statusBar, styles.sidebarFlexBox]}>
        <Text style={[styles.time, styles.nrTypo]}>9:41</Text>
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
      <LinearGradient style={[styles.blackFadeShort, styles.carouselPosition]} locations={[0,1]} colors={['rgba(0, 0, 0, 0)','rgba(15, 15, 15, 0.5)']} />
      <View style={[styles.topNavBar, styles.tabsFlexBox]}>
        <View style={[styles.tabs, styles.tabsFlexBox]}>
          <View style={styles.tab}>
            <Text style={[styles.text, styles.textTypo]}>Following</Text>
            <View style={styles.indicators} />
          </View>
          <View style={styles.tab1}>
            <Text style={[styles.text1, styles.textTypo]}>For You</Text>
          </View>
        </View>
        <9icon style={styles.icon} width={32} height={32} />
      </View>
      <View style={[styles.sidebar, styles.sidebarFlexBox]}>
        <View style={styles.watchNow1FlexBox}>
          <10icon1 style={styles.icon1} width={36} height={36} />
          <Text style={[styles.nr, styles.nrTypo]}>11.5K</Text>
        </View>
        <View style={styles.watchNow1FlexBox}>
          <View style={styles.icon1}>
            <57vector style={[styles.vectorIcon, styles.iconLayout]} width={54} height={58} />
          </View>
          <Text style={[styles.nr, styles.nrTypo]}>312</Text>
        </View>
        <View style={styles.watchNow1FlexBox}>
          <11icon2 style={styles.icon1} width={36} height={36} />
          <Text style={[styles.nr, styles.nrTypo]}>20</Text>
        </View>
      </View>
      <View style={[styles.videoMetaData, styles.videoMetaDataLayout]}>
        <View style={[styles.secretsBillionaireParent, styles.videoMetaDataLayout]}>
          <Text style={styles.secretsBillionaire}>Secrets Billionaire</Text>
          <Text style={[styles.longCaption, styles.captionTypo]}>To escape a politically motivated arranged marriage, a privileged heir Lucas Walton fakes being gay and engaged to his company's new executive, unaware that his "fiancé" is actually an undercover agent investigating his family's corrupt dealings, leading to a hilarious clash of secrets, danger, and unexpected feelings.</Text>
          <Text style={styles.captionTypo}>To escape a politically motivated arranged marriage, a privileged heir Lucas...</Text>
        </View>
        <View style={[styles.watchNow, styles.watchLayout]}>
          <View style={[styles.watchNowChild, styles.watchLayout]} />
          <Text style={[styles.watchNow1, styles.watchPosition]}>Watch Now</Text>
          <58polygon2 style={[styles.watchNowItem, styles.watchPosition]} width={15} height={15} />
        </View>
      </View>
    </View>);
};

const styles = StyleSheet.create({
  carouselPosition: {
    width: 390,
    left: 0,
    position: "absolute"
  },
  carouselLayout: {
    height: 771,
    overflow: "hidden",
    width: 390,
    left: 0,
    position: "absolute"
  },
  sidebarFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    right: 0,
    position: "absolute"
  },
  nrTypo: {
    textAlign: "center",
    fontFamily: FontFamily.calloutBold,
    color: Color.m3White
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute"
  },
  tabsFlexBox: {
    alignItems: "center",
    flexDirection: "row"
  },
  textTypo: {
    letterSpacing: -1,
    textAlign: "center",
    fontFamily: FontFamily.calloutBold,
    lineHeight: 22,
    fontSize: FontSize.size_mid
  },
  videoMetaDataLayout: {
    width: 268,
    position: "absolute"
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
    alignSelf: "stretch",
    color: Color.m3White,
    fontFamily: FontFamily.calloutBold
  },
  watchLayout: {
    width: 204,
    height: 32,
    left: 0,
    position: "absolute"
  },
  watchPosition: {
    top: 8,
    position: "absolute"
  },
  carouselChild: {
    overflow: "hidden",
    top: 0
  },
  carouselItem: {
    top: 771,
    overflow: "hidden"
  },
  carouselInner: {
    top: 1542,
    overflow: "hidden"
  },
  videoView: {
    top: 2313,
    overflow: "hidden"
  },
  carousel: {
    height: 3084,
    top: 0
  },
  videoWindow: {
    height: 772,
    top: 0
  },
  time: {
    letterSpacing: 0,
    width: 80,
    fontWeight: "600",
    lineHeight: 22,
    fontFamily: FontFamily.calloutBold,
    fontSize: FontSize.size_mid
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
    left: "95.24%"
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
    left: 0,
    top: 0
  },
  blackFadeShort: {
    top: 618,
    height: 138,
    backgroundColor: "transparent"
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
    gap: Gap.gap_2xs,
    display: "none",
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
  icon: {
    overflow: "hidden"
  },
  topNavBar: {
    top: 58,
    height: 43,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_9xs,
    gap: Gap.gap_xs,
    right: 0,
    alignItems: "center",
    overflow: "hidden",
    left: 0,
    position: "absolute"
  },
  icon1: {
    overflow: "hidden"
  },
  nr: {
    fontSize: FontSize.size_xs,
    lineHeight: 12
  },
  watchNow1FlexBox: {
    justifyContent: "center",
    alignItems: "center"
  },
  vectorIcon: {
    top: "20.83%",
    right: "20.83%",
    bottom: "20.83%",
    left: "25%"
  },
  sidebar: {
    bottom: 88,
    height: 239,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_9xl,
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
    alignSelf: "stretch",
    color: Color.m3White,
    fontFamily: FontFamily.calloutBold
  },
  longCaption: {
    display: "none"
  },
  secretsBillionaireParent: {
    bottom: 45,
    justifyContent: "flex-end",
    gap: Gap.gap_2xs,
    left: 0
  },
  watchNowChild: {
    borderRadius: Border.br_6xs_4,
    backgroundColor: Color.accent,
    top: 0
  },
  watchNow1: {
    left: 58,
    fontSize: FontSize.size_mini,
    display: "flex",
    width: 103,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.calloutBold,
    color: Color.m3White,
    fontWeight: "600",
    lineHeight: 22
  },
  watchNowItem: {
    left: 49,
    borderRadius: 1
  },
  watchNow: {
    top: 75
  },
  videoMetaData: {
    bottom: 106,
    left: 16,
    height: 107
  },
  feed: {
    backgroundColor: Color.colorMediumblue,
    flex: 1,
    width: "100%",
    height: 844
  }
});

export default Feed;
