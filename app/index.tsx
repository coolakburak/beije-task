import Title from "@/components/Title";
import { ScrollView, View } from "react-native";

import CustomTabView from "@/components/CustomTabView";
import Footer from "@/components/Footer";
import AddCart from "@/components/AddCart";
import { Provider } from "react-redux";
import store from "@/store";

export default function Home() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, paddingBottom: 100 }}>
        <ScrollView>
          <Title />
          <CustomTabView />
          <Footer />
        </ScrollView>
        <AddCart />
      </View>
    </Provider>
  );
}
