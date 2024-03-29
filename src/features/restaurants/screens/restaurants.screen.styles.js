import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const IndicatorView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const IndicatorStyled = styled(ActivityIndicator)`
  margin-left: -25px;
`;
