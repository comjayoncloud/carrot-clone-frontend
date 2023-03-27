import { configureStore, createSlice } from "@reduxjs/toolkit";

/** state 생성 */
const Preview1 = createSlice({
  name: "Preview1",
  initialState: {
    content1_text1: "당신 근처의",
    content1_text2: "당근마켓",
    content2_src:
      "https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png",
    content2_text1: "중고 거래부터 동네정보까지, 이웃과 함께해",
    content2_text2: "가깝고 따듯한 당신의 근처를 만들어요",
  },
});

const Preview2 = createSlice({
  name: "Preview2",
  initialState: {
    content1_text1: "우리 동네 ",
    content1_text2: "중고 직거래 마켓",
    content2_src:
      "https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-39ac203e8922f615aa3843337871cb654b81269e872494128bf08236157c5f6a.png",
    content2_text1: "동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요",
    content2_text2: "",
  },
});

const Preview3 = createSlice({
  name: "Preview3",
  initialState: {
    content1_text1: "이웃과 함께하는",
    content1_text2: "동네생활",
    content2_src:
      "https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-f286322ab98acedf914a05bf77e84c67dcb897c8ccb543e66f6afea9d366d06d.png",
    content2_text1: "우리 동네의 다양한 이야기를 이웃과 함께 나누어요.",
    content2_text2: "",
  },
});

export const store = configureStore({
  reducer: {
    Preview1: Preview1.reducer,
    Preview2: Preview2.reducer,
    Preview3: Preview3.reducer,
  },
});
