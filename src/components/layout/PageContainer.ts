import styled from "styled-components";

export interface PageContainerProps {
	children: React.ReactNode;
	flexDir?: string;
	flexX?: string;
	flexY?: string;
	minHeight?: string;
}

export const PageContainer = styled.div<PageContainerProps>`
	display: flex;
	flex-direction: ${({ flexDir }) => (flexDir ? flexDir : "row")};
	align-items: ${({ flexY }) => (flexY ? flexY : "center")};
	justify-content: ${({ flexX }) => (flexX ? flexX : "center")};
	width: 100%;
	height: 100%;
	min-height: ${({ minHeight }) => (minHeight ? minHeight : "85vh")};
`;
