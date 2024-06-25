import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { FooterStyles } from "@/styles";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={FooterStyles.container}>
      <Text style={FooterStyles.header}>beije.</Text>
      <View>
        <Text style={FooterStyles.subHeader}>Arayı Açmayalım!</Text>
        <Text style={FooterStyles.description}>
          beije'deki yeni ürün ve gelişmeleri sana haber verelim & aylık
          e-gazetemiz döngü'ye abone ol!
        </Text>
      </View>
      <View style={FooterStyles.inputContainer}>
        <TextInput
          style={FooterStyles.input}
          placeholder="e-mail adresin"
          placeholderTextColor={"white"}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={FooterStyles.button}>Gönder</Text>
        </TouchableOpacity>
      </View>
      <View style={FooterStyles.bottomTextContainer}>
        <Text style={FooterStyles.bottomText}>
          Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve
          beije'den haber almayı onaylıyorum.
        </Text>
      </View>
      <View style={FooterStyles.faqContainer}>
        <View>
          <Text style={FooterStyles.faqText}>beije Ped</Text>
          <Text style={FooterStyles.faqText}>beije Günlük Ped</Text>
          <Text style={FooterStyles.faqText}>beije Tampon</Text>
          <Text style={FooterStyles.faqText}>beije Store</Text>
        </View>
        <View>
          <Text style={FooterStyles.faqText}>Blog</Text>
          <Text style={FooterStyles.faqText}>Sıkça Sorulan Sorular</Text>
          <Text style={FooterStyles.faqText}>Biz Kimiz?</Text>
          <Text style={FooterStyles.faqText}>Quiz</Text>
        </View>
      </View>
      <View style={FooterStyles.iconsContainer}>
        <FontAwesome name="facebook" size={24} color="white" />
        <AntDesign name="instagram" size={24} color="white" />
        <AntDesign name="twitter" size={24} color="white" />
        <AntDesign name="linkedin-square" size={24} color="white" />
        <FontAwesome name="spotify" size={24} color="white" />
      </View>
      <View style={FooterStyles.borderLine} />
      <View style={FooterStyles.copyrightContainer}>
        <Text style={FooterStyles.bottomText}>
          2024 beije. Tüm hakları saklıdır.
        </Text>
        <Text style={FooterStyles.copyrightText}>KVKK</Text>
        <Text style={FooterStyles.copyrightText}>KVKK Başvuru Formu</Text>
        <Text style={FooterStyles.copyrightText}>Üyelik Sözleşmesi</Text>
        <Text style={FooterStyles.copyrightText}>Gizlilik Politikası</Text>
        <Text style={FooterStyles.copyrightText}>Çerez Politikası</Text>
        <Text style={FooterStyles.copyrightText}>Test Sonuçları</Text>
      </View>
      <View style={FooterStyles.languageContainer}>
        <Text style={FooterStyles.languageText}>EN | TR</Text>
      </View>
    </View>
  );
};

export default Footer;
