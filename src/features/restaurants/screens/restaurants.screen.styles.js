import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

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
  margin-top: 300px;
`;
