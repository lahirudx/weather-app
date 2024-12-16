import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapIcon from "../icons/MapIcon";
import ListIcon from "../icons/ListIcon";
import TrapezoidBackground from "./TrapezoidBackground";
import { useApplicationDimensions } from "@/hooks/useApplicationDimensions";

export default function TabBarItems() {
  const { width, height } = useApplicationDimensions();
  const trapezoidWidth = width * 0.68;
  const trapezoidHeight = height * 0.12;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 32,
      }}
    >
      <MapIcon />
      <TrapezoidBackground width={trapezoidWidth} height={trapezoidHeight} />
      <ListIcon />
    </View>
  );
}

const styles = StyleSheet.create({});
