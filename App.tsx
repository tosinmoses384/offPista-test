const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ThirdScreen from "./screens/ThirdScreen";
import Frame from "./components/Frame";
import Frame5 from "./components/Frame5";
import Frame4 from "./components/Frame4";
import Frame10 from "./components/Frame10";
import Frame2 from "./components/Frame2";
import Frame3 from "./components/Frame3";
import Frame1 from "./components/Frame1";
import Frame8 from "./components/Frame8";
import FirstScreen from "./screens/FirstScreen";
import Feed from "./screens/Feed";
import FourthScreen from "./screens/FourthScreen";
import SecondDetailScreen from "./screens/SecondDetailScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }: any) {
  const [bottomTabItemsNormal] = React.useState([
    <Frame8 />,
    <Frame />,
    <Frame4 />,
    <Frame2 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Frame1 />,
    <Frame10 />,
    <Frame5 />,
    <Frame3 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }: any) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 0,
              height: 43.5,
            }}
          >
            {bottomTabItemsNormal.map((item: any, index: any) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SecondDetailScreen"
        component={SecondDetailScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ThirdScreen"
        component={ThirdScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="FourthScreen"
        component={FourthScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Feed"
              component={Feed}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
