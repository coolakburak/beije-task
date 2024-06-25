import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, useWindowDimensions, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Slider from "@react-native-community/slider";
import { CustomTabViewStyles } from "@/styles";
import { RootState, AppDispatch } from "../store";
import { updateSlider } from "@/store/sliders/sliderSlice";

interface SliderComponentProps {
  route: keyof RootState["sliders"]["sliders"];
  index: number;
  maximumValue?: number;
}

const SliderComponent: React.FC<SliderComponentProps> = ({
  route,
  index,
  maximumValue,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const value = useSelector(
    (state: RootState) => state.sliders.sliders[route][index]
  );

  return (
    <Slider
      style={CustomTabViewStyles.slider}
      minimumValue={0}
      maximumValue={maximumValue}
      minimumTrackTintColor="#000"
      maximumTrackTintColor="#000000"
      step={10}
      value={value}
      onValueChange={(newValue) => {
        const scaledValue = newValue * 2;
        dispatch(updateSlider({ route, index, value: scaledValue }));
      }}
    />
  );
};

const FirstRoute: React.FC = () => (
  <View style={CustomTabViewStyles.container}>
    <View>
      <Text style={CustomTabViewStyles.header}>Standart Ped</Text>
      <SliderComponent route="firstRoute" index={0} maximumValue={60} />
      <View style={CustomTabViewStyles.numbersContainer}>
        <Text style={CustomTabViewStyles.numbers}>0</Text>
        <Text style={CustomTabViewStyles.numbers}>60</Text>
      </View>
    </View>
    <View>
      <Text style={CustomTabViewStyles.header}>Süper Ped</Text>
      <SliderComponent route="firstRoute" index={1} maximumValue={60} />
      <View style={CustomTabViewStyles.numbersContainer}>
        <Text style={CustomTabViewStyles.numbers}>0</Text>
        <Text style={CustomTabViewStyles.numbers}>60</Text>
      </View>
    </View>
    <View>
      <Text style={CustomTabViewStyles.header}>Süper+ Ped</Text>
      <SliderComponent route="firstRoute" index={2} maximumValue={60} />
      <View style={CustomTabViewStyles.numbersContainer}>
        <Text style={CustomTabViewStyles.numbers}>0</Text>
        <Text style={CustomTabViewStyles.numbers}>60</Text>
      </View>
    </View>
  </View>
);

const SecondRoute: React.FC = () => (
  <View style={CustomTabViewStyles.container}>
    <View>
      <Text style={CustomTabViewStyles.header}>Günlük Ped</Text>
      <SliderComponent route="secondRoute" index={0} maximumValue={100} />
      <View style={CustomTabViewStyles.numbersContainer}>
        <Text style={CustomTabViewStyles.numbers}>0</Text>
        <Text style={CustomTabViewStyles.numbers}>100</Text>
      </View>
    </View>
    <View>
      <Text style={CustomTabViewStyles.header}>Süper Günlük Ped</Text>
      <SliderComponent route="secondRoute" index={1} maximumValue={100} />
      <View style={CustomTabViewStyles.numbersContainer}>
        <Text style={CustomTabViewStyles.numbers}>0</Text>
        <Text style={CustomTabViewStyles.numbers}>100</Text>
      </View>
    </View>
  </View>
);

const ThirdRoute: React.FC = () => (
  <View style={CustomTabViewStyles.container}>
    <View>
      <Text style={CustomTabViewStyles.header}>Mini Tampon</Text>
      <SliderComponent route="thirdRoute" index={0} maximumValue={60} />
      <View style={CustomTabViewStyles.numbersContainer}>
        <Text style={CustomTabViewStyles.numbers}>0</Text>
        <Text style={CustomTabViewStyles.numbers}>60</Text>
      </View>
    </View>
    <View>
      <Text style={CustomTabViewStyles.header}>Standart Tampon</Text>
      <SliderComponent route="thirdRoute" index={1} maximumValue={60} />
      <View style={CustomTabViewStyles.numbersContainer}>
        <Text style={CustomTabViewStyles.numbers}>0</Text>
        <Text style={CustomTabViewStyles.numbers}>60</Text>
      </View>
    </View>
    <View>
      <Text style={CustomTabViewStyles.header}>Süper Tampon</Text>
      <SliderComponent route="thirdRoute" index={2} maximumValue={60} />
      <View style={CustomTabViewStyles.numbersContainer}>
        <Text style={CustomTabViewStyles.numbers}>0</Text>
        <Text style={CustomTabViewStyles.numbers}>60</Text>
      </View>
    </View>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const { height } = Dimensions.get("window");

const CustomTabView: React.FC = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "beije Ped" },
    { key: "second", title: "beije Günlük Ped" },
    { key: "third", title: "beije Tampon" },
  ]);

  return (
    <View
      style={{
        height: height / 2,
        backgroundColor: "white",
        paddingHorizontal: 20,
      }}
    >
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            activeColor="black"
            inactiveColor="#7C7C7C"
            indicatorStyle={{ backgroundColor: "black" }}
            style={{
              backgroundColor: "white",
            }}
          />
        )}
      />
    </View>
  );
};

export default CustomTabView;
