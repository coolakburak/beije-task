import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { AddCartStyles } from "@/styles";

const calculateTotalPrice = (sliders: RootState["sliders"]["sliders"]) => {
  const prices = {
    firstRoute: [60, 71, 80],
    secondRoute: [38, 43],
    thirdRoute: [78, 84, 89],
  };

  let total = 0;
  for (const route in sliders) {
    sliders[route as keyof typeof sliders].forEach((value, index) => {
      const quantity = value / 20;
      total += quantity * prices[route as keyof typeof prices][index];
    });
  }

  return total.toFixed(2);
};

const AddCart: React.FC = () => {
  const sliders = useSelector((state: RootState) => state.sliders.sliders);
  const totalPrice = calculateTotalPrice(sliders);
  const [toggle, setToggle] = React.useState(false);

  useEffect(() => {
    if (totalPrice !== "0.00") {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [totalPrice]);

  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        backgroundColor: "tranparent",
        bottom: 0,
        paddingBottom: 28,
      }}
    >
      {toggle ? (
        <>
          <View
            style={{
              paddingBottom: 20,
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "white",
            }}
          >
            <Text style={AddCartStyles.priceText}>Toplam </Text>
            <Text style={AddCartStyles.priceText}>₺{totalPrice}</Text>
          </View>
          <TouchableOpacity style={AddCartStyles.buttonContainer}>
            <Text style={AddCartStyles.buttonText}>Sepete Ekle</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          style={AddCartStyles.disabledButtonContainer}
          disabled
        >
          <Text style={AddCartStyles.buttonText}>Sepete Ekle</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddCart;
