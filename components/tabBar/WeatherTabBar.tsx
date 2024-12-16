import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArcComponent from "./elements/ArcComponent";
import { useApplicationDimensions } from "@/hooks/useApplicationDimensions";
import TabBarItems from "./elements/TabBarItems";

export default function WeatherTabBar() {
  const tabBarHeight = 88;
  const { width, height } = useApplicationDimensions();

  return (
    <View
      style={{
        flex: 1,
        height: tabBarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - tabBarHeight,
      }}
    >
      <ArcComponent height={tabBarHeight} width={width} />
      <TabBarItems />
    </View>
  );
}

const styles = StyleSheet.create({});
