import * as React from "react";
    import {ScrollView, StyleSheet, View, Text, ImageBackground, Pressable} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from "expo-image";
import Iconmobilesignal from "../assets/icon--mobile-signal.svg"
import Wifi from "../assets/wifi.svg"
import Statusbarbattery from "../assets/-statusbarbattery.svg"
import 13iconsearch from "../assets/13iconsearch.svg"
import 7frame6 from "../assets/7frame-6.svg"
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation, ParamListBase} from "@react-navigation/native";
import 6chevronright from "../assets/6chevronright.svg"
import { Border, Color, Gap, FontFamily, Padding, FontSize } from "../GlobalStyles";
    
const FirstScreen = () => {
const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.firstscreen}>
      <ScrollView style={styles.layout} showsVerticalScrollIndicator={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.layoutScrollViewContent}>
        <View style={[styles.topimagecontainer, styles.topimagecontainerLayout]}>
          <ImageBackground style={[styles.topbarGroupWrapper, styles.topimagecontainerLayout]} resizeMode="cover">
            <View style={[styles.topbarGroup, styles.frameIconFlexBox]}>
              <View style={styles.topbarGroupInner}>
                <LinearGradient style={styles.groupChild} locations={[0,1]} colors={['#000','rgba(0, 0, 0, 0)']} />
              </View>
              <View style={styles.statusbar}>
                <View style={styles.leftSide}>
                  <View style={styles.statusbarTime}>
                    <Text style={styles.time}>9:41</Text>
                  </View>
                </View>
                <View style={styles.dynamicIsland}>
                  <View style={styles.statusbarDynamicisland}>
                    <View style={[styles.truedepthCamera, styles.cameraPosition]} />
                    <View style={[styles.facetimeCamera, styles.cameraPosition]} />
                  </View>
                </View>
                <View style={styles.rightSide}>
                  <View style={styles.tagsFlexBox}>
                    <Iconmobilesignal style={styles.iconMobileSignal} width={18} height={12} />
                    <Wifi style={styles.wifiIcon} width={17} height={12} />
                    <Statusbarbattery style={styles.statusbarBatteryIcon} width={27} height={13} />
                  </View>
                </View>
              </View>
              <View style={[styles.searchParent, styles.buttonSpaceBlock]}>
                <View style={styles.search}>
                  <13iconsearch style={[styles.iconsearch, styles.iconsearchLayout]} width={24} height={24} />
                </View>
                <View style={[styles.logo, styles.logoLayout]}>
                  <View style={styles.shortsParent}>
                    <Text style={styles.shorts}>Shorts</Text>
                    <7frame6 style={styles.frameChild} width={8} height={15} />
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.description}>
            <View style={styles.frameParent}>
              <View style={[styles.frameGroup, styles.tagsFlexBox]}>
                <View style={styles.newWrapper}>
                  <Text style={[styles.new, styles.newTypo]}>New</Text>
                </View>
                <View style={styles.newWrapper}>
                  <Text style={[styles.new, styles.newTypo]}>Detective</Text>
                </View>
                <View style={styles.newWrapper}>
                  <Text style={[styles.new, styles.newTypo]}>Crime</Text>
                </View>
              </View>
              <Pressable style={[styles.button, styles.logoLayout]} onPress={() => navigation.navigate("Feed")}>
                <Image style={styles.image1Icon} contentFit="cover" source={require("../assets/22image-1.png")} />
              </Pressable>
            </View>
            <View style={[styles.frameGroup, styles.tagsFlexBox]}>
              <View style={[styles.view, styles.viewLayout]} />
              <View style={[styles.view1, styles.viewLayout]} />
              <View style={[styles.view1, styles.viewLayout]} />
              <View style={[styles.view1, styles.viewLayout]} />
              <View style={[styles.view1, styles.viewLayout]} />
              <View style={[styles.view1, styles.viewLayout]} />
            </View>
          </View>
        </View>
        <View style={[styles.content, styles.contentSpaceBlock]}>
          <View style={styles.frameContainer}>
            <View style={[styles.mostTrendingParent, styles.frameIconFlexBox]}>
              <Text style={[styles.mostTrending, styles.dramaTypo]}>Continue watching</Text>
              <6chevronright style={[styles.iconsearch, styles.iconsearchLayout]} width={24} height={24} />
            </View>
            <ScrollView style={styles.frameScrollview} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.frameScrollViewContent}>
              <View style={styles.image5Parent}>
                <Image style={styles.image5Icon} contentFit="cover" source={require("../assets/31image-5.png")} />
                <Text style={[styles.noGoodDeep, styles.dramaTypo]}>Better Call Saul</Text>
                <Text style={[styles.storyOfThree, styles.newTypo]} numberOfLines={3}>S2 E13</Text>
              </View>
              <View style={styles.image5Parent}>
                <Image style={styles.image5Icon} contentFit="cover" source={require("../assets/40image-6.png")} />
                <Text style={[styles.noGoodDeep, styles.dramaTypo]}>Landman</Text>
                <Text style={[styles.storyOfThree, styles.newTypo]} numberOfLines={3}>S1 E4</Text>
              </View>
              <View style={styles.image5Parent}>
                <Image style={styles.image5Icon} contentFit="cover" source={require("../assets/44image-7.png")} />
                <Text style={[styles.noGoodDeep, styles.dramaTypo]}>The boys</Text>
                <Text style={[styles.storyOfThree, styles.newTypo]} numberOfLines={3}>Story of three very different families vying to buy the very same 1920s Spanish style villa that they think will solve all their problems.</Text>
              </View>
              <View style={styles.image5Parent}>
                <Image style={styles.image5Icon} contentFit="cover" source={require("../assets/45image-8.png")} />
                <Text style={[styles.noGoodDeep, styles.dramaTypo]}>Doctor House</Text>
                <Text style={[styles.storyOfThree, styles.newTypo]} numberOfLines={3}>Story of three very different families vying to buy the very same 1920s Spanish style villa that they think will solve all their problems.</Text>
              </View>
              <View style={styles.image5Parent}>
                <Image style={styles.image5Icon} contentFit="cover" source={require("../assets/46image-9.png")} />
                <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                <Text style={[styles.storyOfThree, styles.newTypo]} numberOfLines={3}>Story of three very different families vying to buy the very same 1920s Spanish style villa that they think will solve all their problems.</Text>
              </View>
              <View style={styles.image5Parent}>
                <Image style={styles.image5Icon} contentFit="cover" source={require("../assets/14image-10.png")} />
                <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                <Text style={[styles.storyOfThree, styles.newTypo]} numberOfLines={3}>Story of three very different families vying to buy the very same 1920s Spanish style villa that they think will solve all their problems.</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.frameContainer}>
            <View style={[styles.mostTrendingParent, styles.frameIconFlexBox]}>
              <Text style={[styles.mostTrending, styles.dramaTypo]}>Most Trending</Text>
              <6chevronright style={[styles.iconsearch, styles.iconsearchLayout]} width={24} height={24} />
            </View>
            <ScrollView style={styles.frameParent1} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.frameScrollView1Content}>
              <View style={[styles.image13Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/19image-13.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>Black Doves</Text>
                </View>
              </View>
              <View style={[styles.image14Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/20image-14.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <View style={[styles.image15Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/21image-15.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <View style={[styles.image16Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/19image-13.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>Black Doves</Text>
                </View>
              </View>
              <View style={[styles.image17Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/20image-14.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <Image style={[styles.image11Icon, styles.iconPosition1]} contentFit="cover" source={require("../assets/16image-11.png")} />
              <Image style={[styles.image12Icon, styles.iconPosition]} contentFit="cover" source={require("../assets/18image-12.png")} />
            </ScrollView>
          </View>
          <View style={styles.frameContainer}>
            <View style={[styles.mostTrendingParent, styles.frameIconFlexBox]}>
              <Text style={[styles.mostTrending, styles.dramaTypo]}>By Category</Text>
              <6chevronright style={[styles.iconsearch, styles.iconsearchLayout]} width={24} height={24} />
            </View>
            <ScrollView style={styles.frameParent1} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.frameScrollView2Content}>
              <ImageBackground style={[styles.cardIcon, styles.cardIconLayout]} resizeMode="cover">
                <Text style={[styles.drama, styles.dramaTypo]}>Drama</Text>
              </ImageBackground>
              <ImageBackground style={[styles.cardIcon1, styles.cardIconLayout]} resizeMode="cover">
                <Text style={[styles.drama, styles.dramaTypo]}>Crime</Text>
              </ImageBackground>
              <ImageBackground style={[styles.cardIcon2, styles.cardIconLayout]} resizeMode="cover">
                <Text style={[styles.drama, styles.dramaTypo]}>Comedy</Text>
              </ImageBackground>
              <LinearGradient style={[styles.card, styles.cardShadowBox]} locations={[0,1]} colors={['#76609b','#405cb1']}>
                <Text style={[styles.drama, styles.dramaTypo]}>Romance</Text>
              </LinearGradient>
              <LinearGradient style={[styles.card1, styles.cardShadowBox]} locations={[0,1]} colors={['#76609b','#405cb1']}>
                <Text style={[styles.drama, styles.dramaTypo]}>Romance</Text>
              </LinearGradient>
              <Image style={[styles.image11Icon, styles.iconPosition1]} contentFit="cover" source={require("../assets/15image-111.png")} />
              <Image style={[styles.image12Icon, styles.iconPosition]} contentFit="cover" source={require("../assets/17image-121.png")} />
            </ScrollView>
          </View>
          <View style={styles.frameContainer}>
            <View style={[styles.mostTrendingParent, styles.frameIconFlexBox]}>
              <Text style={[styles.mostTrending, styles.dramaTypo]}>For you</Text>
              <Image style={styles.image72Icon} contentFit="cover" source={require("../assets/43image-72.png")} />
            </View>
            <ScrollView style={styles.frameParent1} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.frameScrollView3Content}>
              <View style={[styles.image13Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/23image-22.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>House</Text>
                </View>
              </View>
              <View style={[styles.image14Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/24image-23.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>Dexter</Text>
                </View>
              </View>
              <View style={[styles.image15Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/25image-24.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <View style={[styles.image16Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/19image-13.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>Black Doves</Text>
                </View>
              </View>
              <View style={[styles.image17Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/20image-14.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <View style={[styles.image27Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/21image-15.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <Image style={[styles.image20Icon, styles.iconPosition]} contentFit="cover" source={require("../assets/16image-11.png")} />
              <Image style={[styles.image21Icon, styles.iconPosition1]} contentFit="cover" source={require("../assets/18image-12.png")} />
            </ScrollView>
          </View>
          <View style={styles.frameContainer}>
            <View style={[styles.mostTrendingParent, styles.frameIconFlexBox]}>
              <Text style={[styles.mostTrending, styles.dramaTypo]}>Drama</Text>
              <Image style={[styles.image28Icon, styles.iconsearchLayout]} contentFit="cover" source={require("../assets/26image-28.png")} />
            </View>
            <ScrollView style={styles.frameParent1} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.frameScrollView4Content}>
              <View style={[styles.image13Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/25image-24.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>House</Text>
                </View>
              </View>
              <View style={[styles.image14Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/20image-14.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>Dexter</Text>
                </View>
              </View>
              <View style={[styles.image15Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/27image-33.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <View style={[styles.image16Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/19image-13.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>Black Doves</Text>
                </View>
              </View>
              <View style={[styles.image17Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/20image-14.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <View style={[styles.image27Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/20image-14.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <Image style={[styles.image20Icon, styles.iconPosition]} contentFit="cover" source={require("../assets/16image-11.png")} />
              <Image style={[styles.image21Icon, styles.iconPosition1]} contentFit="cover" source={require("../assets/18image-12.png")} />
            </ScrollView>
          </View>
          <View style={styles.frameContainer}>
            <View style={[styles.mostTrendingParent, styles.frameIconFlexBox]}>
              <Text style={[styles.mostTrending, styles.dramaTypo]}>Romance</Text>
              <Image style={[styles.image28Icon, styles.iconsearchLayout]} contentFit="cover" source={require("../assets/26image-28.png")} />
            </View>
            <ScrollView style={styles.frameParent1} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.frameScrollView5Content}>
              <View style={[styles.image13Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/28image-40.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>House</Text>
                </View>
              </View>
              <View style={[styles.image14Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/19image-13.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>Dexter</Text>
                </View>
              </View>
              <View style={[styles.image15Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/27image-33.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <View style={[styles.image16Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/29image-43.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>Black Doves</Text>
                </View>
              </View>
              <View style={[styles.image17Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/29image-43.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <View style={[styles.image27Parent, styles.parentLayout]}>
                <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/21image-15.png")} />
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <Image style={[styles.image20Icon, styles.iconPosition]} contentFit="cover" source={require("../assets/16image-11.png")} />
              <Image style={[styles.image21Icon, styles.iconPosition1]} contentFit="cover" source={require("../assets/18image-12.png")} />
            </ScrollView>
          </View>
          <View style={styles.frameContainer}>
            <View style={[styles.mostTrendingParent, styles.frameIconFlexBox]}>
              <Text style={[styles.mostTrending, styles.dramaTypo]}>Documentary</Text>
              <Image style={[styles.image28Icon, styles.iconsearchLayout]} contentFit="cover" source={require("../assets/26image-28.png")} />
            </View>
            <ScrollView style={styles.frameParent1} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.frameScrollView6Content}>
              <View style={[styles.image13Parent, styles.parentLayout]}>
                <View style={styles.iconLayout}>
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/53_mv5byjuznzk4zdmtzty2os00mtg1lwfiotytywiyywjimwm1mge5xkeyxkfqcgc-v1--1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/55_mv5bzmzhy2viyzytmtq0ns00ndcylwixztytmguyode0nda0nmnkxkeyxkfqcgc-v1--1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/48_mv5bmjgxyjawnmmtytawzc00ymqxlwjlotmtmwm0ngjmnde0ymi2xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/49_mv5bmtq3ymq4yzmtotkyzc00ymm5lthhzjetm2e0mjfkntc0ogjhxkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/50_mv5bmwjln2u5mzitnju4my00ntm2lwfjowutowfinjg3ztmxzdy1xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/51_mv5bnddjntezmjmtyjm3mi00nzq3lwflnwmtzjdmywu3zdkzmjk1xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/54_mv5bymi0y2y0ywqtztuzms00mjrkltk2zdutmwewzdgxzmzlztvmxkeyxkfqcgc-v1--3.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/52_mv5bntrky2zknzutmzblnc00ntc0lwe0zdqtmwzingu5oweyzgu4xkeyxkfqcgc-v1--3.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/47_mv5bmdqynze2nmytmzexmy00ntbjlwe4oditnji1otnkzwvjnduyxkeyxkfqcgc-v1--3.png")} />
                </View>
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>House</Text>
                </View>
              </View>
              <View style={[styles.image14Parent, styles.parentLayout]}>
                <View style={styles.iconLayout}>
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/53_mv5byjuznzk4zdmtzty2os00mtg1lwfiotytywiyywjimwm1mge5xkeyxkfqcgc-v1--1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/55_mv5bzmzhy2viyzytmtq0ns00ndcylwixztytmguyode0nda0nmnkxkeyxkfqcgc-v1--1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/48_mv5bmjgxyjawnmmtytawzc00ymqxlwjlotmtmwm0ngjmnde0ymi2xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/49_mv5bmtq3ymq4yzmtotkyzc00ymm5lthhzjetm2e0mjfkntc0ogjhxkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/50_mv5bmwjln2u5mzitnju4my00ntm2lwfjowutowfinjg3ztmxzdy1xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/51_mv5bnddjntezmjmtyjm3mi00nzq3lwflnwmtzjdmywu3zdkzmjk1xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/54_mv5bymi0y2y0ywqtztuzms00mjrkltk2zdutmwewzdgxzmzlztvmxkeyxkfqcgc-v1--3.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/52_mv5bntrky2zknzutmzblnc00ntc0lwe0zdqtmwzingu5oweyzgu4xkeyxkfqcgc-v1--3.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/47_mv5bmdqynze2nmytmzexmy00ntbjlwe4oditnji1otnkzwvjnduyxkeyxkfqcgc-v1--3.png")} />
                </View>
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>Dexter</Text>
                </View>
              </View>
              <View style={[styles.image15Parent, styles.parentLayout]}>
                <View style={styles.iconLayout}>
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/53_mv5byjuznzk4zdmtzty2os00mtg1lwfiotytywiyywjimwm1mge5xkeyxkfqcgc-v1--1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/55_mv5bzmzhy2viyzytmtq0ns00ndcylwixztytmguyode0nda0nmnkxkeyxkfqcgc-v1--1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/48_mv5bmjgxyjawnmmtytawzc00ymqxlwjlotmtmwm0ngjmnde0ymi2xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/49_mv5bmtq3ymq4yzmtotkyzc00ymm5lthhzjetm2e0mjfkntc0ogjhxkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/50_mv5bmwjln2u5mzitnju4my00ntm2lwfjowutowfinjg3ztmxzdy1xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/51_mv5bnddjntezmjmtyjm3mi00nzq3lwflnwmtzjdmywu3zdkzmjk1xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/54_mv5bymi0y2y0ywqtztuzms00mjrkltk2zdutmwewzdgxzmzlztvmxkeyxkfqcgc-v1--3.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/52_mv5bntrky2zknzutmzblnc00ntc0lwe0zdqtmwzingu5oweyzgu4xkeyxkfqcgc-v1--3.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/47_mv5bmdqynze2nmytmzexmy00ntbjlwe4oditnji1otnkzwvjnduyxkeyxkfqcgc-v1--3.png")} />
                </View>
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <View style={[styles.image16Parent, styles.parentLayout]}>
                <View style={styles.iconLayout}>
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/53_mv5byjuznzk4zdmtzty2os00mtg1lwfiotytywiyywjimwm1mge5xkeyxkfqcgc-v1--1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/55_mv5bzmzhy2viyzytmtq0ns00ndcylwixztytmguyode0nda0nmnkxkeyxkfqcgc-v1--1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/48_mv5bmjgxyjawnmmtytawzc00ymqxlwjlotmtmwm0ngjmnde0ymi2xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/49_mv5bmtq3ymq4yzmtotkyzc00ymm5lthhzjetm2e0mjfkntc0ogjhxkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/50_mv5bmwjln2u5mzitnju4my00ntm2lwfjowutowfinjg3ztmxzdy1xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/51_mv5bnddjntezmjmtyjm3mi00nzq3lwflnwmtzjdmywu3zdkzmjk1xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/54_mv5bymi0y2y0ywqtztuzms00mjrkltk2zdutmwewzdgxzmzlztvmxkeyxkfqcgc-v1--3.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/52_mv5bntrky2zknzutmzblnc00ntc0lwe0zdqtmwzingu5oweyzgu4xkeyxkfqcgc-v1--3.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/47_mv5bmdqynze2nmytmzexmy00ntbjlwe4oditnji1otnkzwvjnduyxkeyxkfqcgc-v1--3.png")} />
                </View>
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>Black Doves</Text>
                </View>
              </View>
              <View style={[styles.image17Parent, styles.parentLayout]}>
                <View style={styles.iconLayout}>
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/53_mv5byjuznzk4zdmtzty2os00mtg1lwfiotytywiyywjimwm1mge5xkeyxkfqcgc-v1--1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/55_mv5bzmzhy2viyzytmtq0ns00ndcylwixztytmguyode0nda0nmnkxkeyxkfqcgc-v1--1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/48_mv5bmjgxyjawnmmtytawzc00ymqxlwjlotmtmwm0ngjmnde0ymi2xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/49_mv5bmtq3ymq4yzmtotkyzc00ymm5lthhzjetm2e0mjfkntc0ogjhxkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/50_mv5bmwjln2u5mzitnju4my00ntm2lwfjowutowfinjg3ztmxzdy1xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/51_mv5bnddjntezmjmtyjm3mi00nzq3lwflnwmtzjdmywu3zdkzmjk1xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/54_mv5bymi0y2y0ywqtztuzms00mjrkltk2zdutmwewzdgxzmzlztvmxkeyxkfqcgc-v1--3.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/52_mv5bntrky2zknzutmzblnc00ntc0lwe0zdqtmwzingu5oweyzgu4xkeyxkfqcgc-v1--3.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/47_mv5bmdqynze2nmytmzexmy00ntbjlwe4oditnji1otnkzwvjnduyxkeyxkfqcgc-v1--3.png")} />
                </View>
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <View style={[styles.image27Parent, styles.parentLayout]}>
                <View style={styles.iconLayout}>
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/53_mv5byjuznzk4zdmtzty2os00mtg1lwfiotytywiyywjimwm1mge5xkeyxkfqcgc-v1--1.png")} />
                  <Image style={[styles.mv5bnddjntezmjmtyjm3mi00nzq3lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/55_mv5bzmzhy2viyzytmtq0ns00ndcylwixztytmguyode0nda0nmnkxkeyxkfqcgc-v1--1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/48_mv5bmjgxyjawnmmtytawzc00ymqxlwjlotmtmwm0ngjmnde0ymi2xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/49_mv5bmtq3ymq4yzmtotkyzc00ymm5lthhzjetm2e0mjfkntc0ogjhxkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/50_mv5bmwjln2u5mzitnju4my00ntm2lwfjowutowfinjg3ztmxzdy1xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/51_mv5bnddjntezmjmtyjm3mi00nzq3lwflnwmtzjdmywu3zdkzmjk1xkeyxkfqcgc-v1.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/54_mv5bymi0y2y0ywqtztuzms00mjrkltk2zdutmwewzdgxzmzlztvmxkeyxkfqcgc-v1--3.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/52_mv5bntrky2zknzutmzblnc00ntc0lwe0zdqtmwzingu5oweyzgu4xkeyxkfqcgc-v1--3.png")} />
                  <Image style={[styles.mv5byjuznzk4zdmtzty2os00mtg1lwIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/47_mv5bmdqynze2nmytmzexmy00ntbjlwe4oditnji1otnkzwvjnduyxkeyxkfqcgc-v1--3.png")} />
                </View>
                <View style={styles.tagsParent}>
                  <View style={[styles.tags, styles.tagsFlexBox]}>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new3, styles.newTypo]}>Detective</Text>
                    </View>
                    <View style={styles.newWrapper1}>
                      <Text style={[styles.new4, styles.homeTypo]}>Drama</Text>
                    </View>
                  </View>
                  <Text style={[styles.noGoodDeep, styles.dramaTypo]}>No Good Deep</Text>
                </View>
              </View>
              <Image style={[styles.image20Icon, styles.iconPosition]} contentFit="cover" source={require("../assets/16image-11.png")} />
              <Image style={[styles.image21Icon, styles.iconPosition1]} contentFit="cover" source={require("../assets/18image-12.png")} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </ScrollView>);
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 12
  },
  frameScrollView1Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 12
  },
  frameScrollView2Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 12
  },
  frameScrollView3Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 12
  },
  frameScrollView4Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 12
  },
  frameScrollView5Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 12
  },
  frameScrollView6Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 12
  },
  layoutScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  topimagecontainerLayout: {
    height: 831,
    alignSelf: "stretch"
  },
  frameIconFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch"
  },
  cameraPosition: {
    left: "50%",
    top: "50%",
    marginTop: -18.5,
    height: 37,
    borderRadius: Border.br_81xl,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.black
  },
  buttonSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center"
  },
  iconsearchLayout: {
    width: 24,
    height: 24
  },
  logoLayout: {
    height: 44,
    justifyContent: "center"
  },
  tagsFlexBox: {
    gap: Gap.gap_lg,
    flexDirection: "row"
  },
  newTypo: {
    fontFamily: FontFamily.textS,
    color: Color.colorGray_200,
    textAlign: "left"
  },
  viewLayout: {
    height: 6,
    borderRadius: Border.br_81xl
  },
  contentSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch"
  },
  dramaTypo: {
    color: Color.m3White,
    fontFamily: FontFamily.textSemiBold,
    textAlign: "left",
    fontWeight: "600"
  },
  parentLayout: {
    gap: Gap.gap_md,
    width: 146
  },
  homeTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textS,
    textAlign: "left"
  },
  iconPosition1: {
    width: 20,
    maxHeight: "100%",
    bottom: 0,
    top: -65,
    position: "absolute"
  },
  iconPosition: {
    zIndex: 6,
    width: 20,
    maxHeight: "100%",
    bottom: 0,
    top: -65,
    position: "absolute"
  },
  cardIconLayout: {
    width: 146,
    borderRadius: Border.br_5xs,
    padding: Padding.p_xs,
    overflow: "hidden",
    alignSelf: "stretch"
  },
  cardShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 146,
    borderRadius: Border.br_5xs,
    padding: Padding.p_xs,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    backgroundColor: "transparent",
    overflow: "hidden",
    alignSelf: "stretch"
  },
  iconLayout: {
    height: 220,
    width: 146
  },
  groupChild: {
    top: 132,
    right: -391,
    left: 391,
    transform: [
      {
        rotate: "180deg"
      }
    ],
    backgroundColor: "transparent",
    height: 132,
    position: "absolute"
  },
  topbarGroupInner: {
    right: -1,
    height: 132,
    left: 0,
    top: 0,
    position: "absolute",
    zIndex: 0
  },
  time: {
    top: 1,
    fontSize: FontSize.calloutBold_size,
    letterSpacing: 0,
    lineHeight: 21,
    fontFamily: FontFamily.calloutBold,
    textAlign: "center",
    height: 20,
    color: Color.white,
    fontWeight: "600",
    width: 54,
    left: 0,
    position: "absolute"
  },
  statusbarTime: {
    borderRadius: 24,
    height: 21,
    width: 54
  },
  leftSide: {
    paddingLeft: Padding.p_3xs,
    paddingBottom: 3,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    flex: 1
  },
  truedepthCamera: {
    marginLeft: -62.5,
    width: 80
  },
  facetimeCamera: {
    marginLeft: 25.5,
    width: 37
  },
  statusbarDynamicisland: {
    width: 125,
    height: 37,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black
  },
  dynamicIsland: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch"
  },
  iconMobileSignal: {},
  wifiIcon: {},
  statusbarBatteryIcon: {},
  rightSide: {
    paddingRight: 11,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1
  },
  statusbar: {
    opacity: 0,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1
  },
  iconsearch: {
    overflow: "hidden"
  },
  search: {
    borderRadius: Border.br_xs,
    width: 48,
    height: 48,
    padding: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row"
  },
  shorts: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    textAlign: "left",
    fontSize: FontSize.size_2xl,
    color: Color.white
  },
  frameChild: {},
  shortsParent: {
    gap: Gap.gap_xs,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "stretch"
  },
  logo: {
    width: 102,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    display: "none",
    alignItems: "flex-end"
  },
  searchParent: {
    gap: 202,
    zIndex: 2,
    paddingHorizontal: Padding.p_xl,
    alignSelf: "stretch",
    flexDirection: "row"
  },
  topbarGroup: {
    height: 157,
    overflow: "hidden"
  },
  topbarGroupWrapper: {
    zIndex: 0
  },
  new: {
    color: Color.colorGray_200,
    lineHeight: 18,
    fontFamily: FontFamily.textS,
    fontSize: FontSize.textSemiBold_size
  },
  newWrapper: {
    borderStyle: "solid",
    borderColor: Color.white30,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  frameGroup: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch"
  },
  image1Icon: {
    width: 94,
    height: 24
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: 149,
    paddingHorizontal: Padding.p_9xl,
    borderRadius: Border.br_5xs,
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden"
  },
  frameParent: {
    gap: Gap.gap_xl,
    alignItems: "center",
    alignSelf: "stretch"
  },
  view: {
    backgroundColor: Color.accent,
    width: 16
  },
  view1: {
    backgroundColor: Color.colorGray_200,
    width: 6
  },
  description: {
    top: 606,
    left: 9,
    width: 320,
    height: 177,
    minWidth: 320,
    gap: Gap.gap_2xl,
    zIndex: 1,
    justifyContent: "center",
    position: "absolute"
  },
  topimagecontainer: {
    justifyContent: "flex-end"
  },
  mostTrending: {
    fontFamily: FontFamily.textSemiBold,
    fontSize: FontSize.size_2xl
  },
  mostTrendingParent: {
    flexDirection: "row"
  },
  image5Icon: {
    height: 155,
    width: 116
  },
  noGoodDeep: {
    fontSize: FontSize.textSemiBold_size,
    fontFamily: FontFamily.textSemiBold,
    alignSelf: "stretch"
  },
  storyOfThree: {
    color: Color.colorGray_200,
    lineHeight: 18,
    fontFamily: FontFamily.textS,
    fontSize: FontSize.textSemiBold_size,
    display: "none",
    overflow: "hidden",
    alignSelf: "stretch"
  },
  image5Parent: {
    gap: Gap.gap_sm,
    width: 116
  },
  frameScrollview: {
    alignSelf: "stretch",
    width: "100%"
  },
  frameContainer: {
    gap: Gap.gap_2xl,
    alignSelf: "stretch"
  },
  new3: {
    fontSize: FontSize.textS_size,
    color: Color.colorGray_200
  },
  newWrapper1: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  new4: {
    textTransform: "uppercase",
    color: Color.colorGray_200
  },
  tags: {
    alignSelf: "stretch"
  },
  tagsParent: {
    gap: Gap.gap_xs,
    alignSelf: "stretch"
  },
  image13Parent: {
    zIndex: 0
  },
  image14Parent: {
    zIndex: 1
  },
  image15Parent: {
    zIndex: 2
  },
  image16Parent: {
    zIndex: 3
  },
  image17Parent: {
    zIndex: 4
  },
  image11Icon: {
    zIndex: 5,
    right: -20
  },
  image12Icon: {
    left: -20
  },
  frameParent1: {
    alignSelf: "stretch",
    width: "100%"
  },
  drama: {
    width: 96,
    fontFamily: FontFamily.textSemiBold,
    fontSize: FontSize.size_2xl
  },
  cardIcon: {
    alignItems: "center",
    zIndex: 0,
    justifyContent: "flex-end"
  },
  cardIcon1: {
    zIndex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row"
  },
  cardIcon2: {
    zIndex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row"
  },
  card: {
    zIndex: 3
  },
  card1: {
    zIndex: 4
  },
  image72Icon: {
    width: 1,
    height: 1
  },
  image27Parent: {
    zIndex: 5
  },
  image20Icon: {
    right: -20
  },
  image21Icon: {
    zIndex: 7,
    left: -20
  },
  image28Icon: {
    height: 24
  },
  mv5byjuznzk4zdmtzty2os00mtg1lwIcon: {
    borderRadius: Border.br_5xs,
    display: "none",
    left: 0,
    top: 0,
    height: 220,
    position: "absolute"
  },
  mv5bnddjntezmjmtyjm3mi00nzq3lwIcon: {
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 220,
    position: "absolute"
  },
  content: {
    backgroundColor: "#000",
    height: 2322,
    paddingBottom: 200,
    gap: 40,
    overflow: "hidden"
  },
  layout: {
    alignSelf: "stretch",
    flex: 1
  },
  firstscreen: {
    maxWidth: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: Color.black
  }
});

export default FirstScreen;
