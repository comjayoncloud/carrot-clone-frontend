import { configureStore } from "@reduxjs/toolkit";
import { Preview } from "../Actions/previewSlice";
import { reducer as signupReducer } from "../Actions/signupSlice";
import { reducer as postingReducer } from "../Actions/postingSlice";
export const store = configureStore({
  reducer: {
    view1: Preview.view1.reducer,
    view2: Preview.view2.reducer,
    view3: Preview.view3.reducer,
    view4: Preview.view4.reducer,
    signup: signupReducer,
    posting: postingReducer,
  },
});
