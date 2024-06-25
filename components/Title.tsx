import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TitleStyles } from "@/styles";

const Title = () => {
  return (
    <View style={TitleStyles.container}>
      <Text style={TitleStyles.title}>Kendi Paketini Oluştur</Text>
      <Text style={TitleStyles.description}>
        Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
        miktarlardan, sana özel bir paket oluşturalım.
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({});
