import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliderState {
  sliders: {
    firstRoute: number[];
    secondRoute: number[];
    thirdRoute: number[];
  };
}

const initialState: SliderState = {
  sliders: {
    firstRoute: [0, 0, 0],
    secondRoute: [0, 0],
    thirdRoute: [0, 0, 0],
  },
};

interface UpdateSliderPayload {
  route: keyof SliderState["sliders"];
  index: number;
  value: number;
}

const sliderSlice = createSlice({
  name: "sliders",
  initialState,
  reducers: {
    updateSlider: (state, action: PayloadAction<UpdateSliderPayload>) => {
      const { route, index, value } = action.payload;
      state.sliders[route][index] = value;
    },
  },
});

export const { updateSlider } = sliderSlice.actions;

export default sliderSlice.reducer;
