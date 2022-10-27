import styled from "styled-components";

export interface FlexContainerProps {
	children: React.ReactNode;
	flexDir?: string;
	flexX?: string;
	flexY?: string;
	minHeight?: string;
	margin?: string;
}

export const FlexContainer = styled.div<FlexContainerProps>`
	display: flex;
	flex-direction: ${({ flexDir }) => (flexDir ? flexDir : "row")};
	align-items: ${({ flexY }) => (flexY ? flexY : "center")};
	justify-content: ${({ flexX }) => (flexX ? flexX : "center")};
	height: 100%;
	min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
	margin: ${({ margin }) => (margin ? margin : "")};
`;
