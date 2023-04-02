import { createSlice } from "@reduxjs/toolkit";

/** 변수만을 담고있는 Slice */

const view1 = createSlice({
  name: "view1",
  initialState: {
    name: "1",
    content1_text1: "당신 근처의",
    content1_text2: "당근마켓",
    content2_src:
      "https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png",
    content2_text1: "중고 거래부터 동네정보까지, 이웃과 함께해",
    content2_text2: "가깝고 따듯한 당신의 근처를 만들어요",
  },
});

const view2 = createSlice({
  name: "view2",
  initialState: {
    name: "2",
    content1_text1: "우리 동네 ",
    content1_text2: "중고 직거래 마켓",
    content2_src:
      "https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-39ac203e8922f615aa3843337871cb654b81269e872494128bf08236157c5f6a.png",
    content2_text1: "동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요",
    content2_text2: "",
  },
});

const view3 = createSlice({
  name: "view3",
  initialState: {
    name: "3",
    content1_text1: "이웃과 함께하는",
    content1_text2: "동네생활",
    content2_src:
      "https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-f286322ab98acedf914a05bf77e84c67dcb897c8ccb543e66f6afea9d366d06d.png",
    content2_text1: "우리 동네의 다양한 이야기를 이웃과 함께 나누어요.",
    content2_text2: "",
  },
});

const view4 = createSlice({
  name: "view4",
  initialState: {
    name: "4",
    content1_text1: "내 근처에서 찾는",
    content1_text2: "동네가게",
    content2_src:
      "https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-0c8b631ac2294ac5a3b3e7a3a5580c3e68a3303ad2aded1e84aa57a2e1442786.png",
    content2_text1: "우리 동네 가게를 찾고 있나요?",
    content2_text2: "동네 주민이 남긴 진짜 후기를 함께 확인해보세요!",
  },
});
export const Preview = {
  view1,
  view2,
  view3,
  view4,
};
