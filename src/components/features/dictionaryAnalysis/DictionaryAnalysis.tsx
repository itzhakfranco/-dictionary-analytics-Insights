import CustomInput from "../../common/custom-input/CustomInput";
import TextResult from "./TextResult";
import Navbar from "../../common/navbar/Navbar";
import PageHeader from "../../common/page-header/PageHeader";
import { MainContainer } from "../../layout/MainContainer";

export default function DictionaryStatistic() {
	return (
		<MainContainer>
			<Navbar />
			<PageHeader />
			<CustomInput />
			<TextResult />
		</MainContainer>
	);
}
