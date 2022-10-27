import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import {
	DictionaryAnalysisState,
	DictionaryHash,
} from "../ts/interface/DictionaryAnalysis.interface";

import _startWithData from "../data/startWithData.json";
import _endWithData from "../data/endWithData.json";
import _repeatedLetterData from "../data/repeatedLetterData.json";

const initialState = {
	startWithCount: 0,
	endWithCount: 0,
	repeatedLetterCount: 0,
	isLoading: false,
	userQuery: "",
};

export const mimicLoading = createAsyncThunk("", async () => {
	return new Promise((resolve: any) => {
		setTimeout(() => {
			resolve();
		}, 1300);
	});
});

export const dictionaryAnalysis = createSlice({
	name: "dictionaryAnalysis",
	initialState,
	reducers: {
		setUserInput: (
			state,
			action: PayloadAction<string>
		): DictionaryAnalysisState => {
			const startWithData: DictionaryHash = _startWithData;
			const endWithData: DictionaryHash = _endWithData;
			const repeatedLetterData: DictionaryHash = _repeatedLetterData;

			return {
				startWithCount: startWithData[action.payload].length,
				endWithCount: endWithData[action.payload].length,
				repeatedLetterCount: repeatedLetterData[action.payload].length,
				isLoading: false,
				userQuery: action.payload.toUpperCase(),
			};
		},
		resetUserQuery: (): DictionaryAnalysisState => {
			return {
				startWithCount: 0,
				endWithCount: 0,
				repeatedLetterCount: 0,
				isLoading: false,
				userQuery: "",
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(mimicLoading.fulfilled, (state, action) => {
				state.isLoading = false;
			})
			.addCase(mimicLoading.pending, (state, action) => {
				state.isLoading = true;
			});
	},
});

export const { setUserInput, resetUserQuery } = dictionaryAnalysis.actions;
