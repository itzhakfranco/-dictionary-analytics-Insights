import { useAppSelector } from "../../../hooks/useSelectorDispatch";
import { CustomTitle } from "../../common/custom-title/CustomTitle";
import Chart from "../../common/charts/Chart";
import { FlexContainer } from "../../layout/FlexContainer";
import Loader from "../../common/loader-spiner/LoaderSpiner";
import { RootState } from "../../../store/store";

const ResultItem = () => {
	const {
		userQuery,
		startWithCount,
		endWithCount,
		repeatedLetterCount,
		isLoading,
	} = useAppSelector((state: RootState) => state.dictionaryAnalysis);

	const data = {
		labels: [
			`Words that start with the letter ${userQuery}`,
			`Words that end with the letter ${userQuery}`,
			`Words that the letter ${userQuery} repeated in conjunction`,
		],
		datasets: [
			{
				label: `Letter ${userQuery} Analysis information`,
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgb(255, 99, 132)",
				data: [startWithCount, endWithCount, repeatedLetterCount],
			},
		],
	};

	if (userQuery === "") return null;
	if (isLoading) {
		return <Loader />;
	}
	return (
		<FlexContainer flexDir='column' flexX='center' flexY='center'>
			<CustomTitle
				titleText={`${startWithCount} - Words that start with the letter ${userQuery}`}
				fontSize='1rem'
			/>
			<CustomTitle
				titleText={`${endWithCount} - Words that Ends with the letter ${userQuery}`}
				fontSize='1rem'
			/>
			<CustomTitle
				titleText={`${repeatedLetterCount} - Words have the letter ${userQuery} repeated in conjunction`}
				fontSize='1rem'
			/>
			<div>
				<Chart dataset={data} />
			</div>
		</FlexContainer>
	);
};

export default ResultItem;
