import React from "react";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../hooks/useSelectorDispatch";
import {
	setUserInput,
	resetUserQuery,
	mimicLoading,
} from "../../../store/dictionaryAnalysis.slice";
import { FlexContainer } from "../../layout/FlexContainer";
import { CustomTitle } from "../custom-title/CustomTitle";

import { RootState } from "../../../store/store";
import { DictionaryAnalysis } from "../../../ts/enum/DictionaryAnalysis.enum";
export default function CustomInput() {
	const dispatch = useAppDispatch();
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const enLetterRegex = /^[A-Za-z]+$/;
		const input = e.target.value.trim().toLowerCase();
		if (
			input.length === 1 &&
			typeof input === "string" &&
			enLetterRegex.test(input)
		) {
			dispatch(setUserInput(input));
			dispatch(mimicLoading());
		} else {
			dispatch(resetUserQuery());
		}
	};

	const { userQuery } = useAppSelector(
		(state: RootState) => state.dictionaryAnalysis
	);
	return (
		<FlexContainer flexDir='column' flexX='center' flexY='center'>
			<CustomTitle titleText={DictionaryAnalysis.SEARCH_BUTTON_TITLE} />
			<input
				style={{
					fontSize: "4rem",
					width: "8rem",
					height: "8rem",
					margin: "1rem 0  2rem 0",
					textAlign: "center",
					textTransform: "capitalize",
				}}
				onChange={(e) => onChangeHandler(e)}
				maxLength={1}
				type='text'
				className='form-control'
				pattern='[A-Za-z]'
				value={userQuery}
			/>
		</FlexContainer>
	);
}
