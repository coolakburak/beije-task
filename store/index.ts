import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./sliders/sliderSlice";

const store = configureStore({
  reducer: {
    sliders: sliderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
