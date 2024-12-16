import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Canvas,
  Line,
  LinearGradient,
  Path,
  vec,
} from "@shopify/react-native-skia";

interface ArcComponentProps {
  height: number;
  width: number;
}

export default function ArcComponent({ height, width }: ArcComponentProps) {
  const arcPath = `
    M 0 0 Q ${width / 2} ${
    height / 2
  } ${width} 0 L ${width} ${height} L 0 ${height} Z
    `;

  const arcBorderPath = `M 0 0 Q ${width / 2} ${height / 2} ${width} 0`;

  return (
    <Canvas style={{ height, ...StyleSheet.absoluteFillObject }}>
      <Path path={arcPath}>
        <LinearGradient
          colors={["rgba(58,58,106, 0.26)", "rgba(37,36,76, 0.26)"]}
          start={vec(width / 2, 0)}
          end={vec(width / 2, height)}
        />
      </Path>
      <Path
        path={arcBorderPath}
        style="stroke"
        strokeWidth={0.5}
        color="rgba(117, 130, 244, 0.5)"
      />
    </Canvas>
  );
}

const styles = StyleSheet.create({});
