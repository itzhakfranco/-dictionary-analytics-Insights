import styled from "styled-components";
import { MainContainerProps } from "../../ts/interface/DictionaryAnalysis.interface";

export const MainContainer = styled.div<MainContainerProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 1rem;
`;
