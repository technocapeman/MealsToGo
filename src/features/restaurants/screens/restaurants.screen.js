import { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  SearchContainer,
  RestaurantList,
  IndicatorView,
  IndicatorStyled,
} from "./restaurants.screen.styles";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <IndicatorView>
          <IndicatorStyled
            size={50}
            animating={true}
            color={colors.brand.primary}
          />
        </IndicatorView>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
