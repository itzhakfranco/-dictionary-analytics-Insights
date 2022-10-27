import { configureStore } from "@reduxjs/toolkit";
import { dictionaryAnalysis } from "./dictionaryAnalysis.slice";

export const store = configureStore({
	reducer: {
		[dictionaryAnalysis.name]: dictionaryAnalysis.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
