import { CustomTitle } from "../../common/custom-title/CustomTitle";
import { DictionaryAnalysis } from "../../../ts/enum/DictionaryAnalysis.enum";
import { TitleContainer } from "./PageHeader.style";

export default function PageHeader() {
	return (
		<>
			<TitleContainer>
				<CustomTitle
					titleText={DictionaryAnalysis.PAGE_HEADER_TITLE}
					fontSize='1.2rem'
					fontWeight='500'
					padding='1rem 0 0 0'
				/>
				<CustomTitle
					titleText={DictionaryAnalysis.PAGE_HEADER_SUBTITLE}
					fontSize='1rem'
					fontWeight='300'
				/>
			</TitleContainer>
		</>
	);
}
