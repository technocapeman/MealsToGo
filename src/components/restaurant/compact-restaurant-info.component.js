import React from "react";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  border-radius: 5px;
  width: 120px;
  height: 100px;
`;

const TextInfo = styled(Text)`
  text-align: center;
`;

const CompactWebView = styled(WebView)`
  border-radius: 5px;
  width: 120px;
  height: 120px;
`;

const ResInfo = styled.View`
  padding: 1px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <ResInfo>
      <Image source={{ uri: restaurant.photos[0] }} />
      <TextInfo variant="caption">{restaurant.name}</TextInfo>
    </ResInfo>
  );
};
