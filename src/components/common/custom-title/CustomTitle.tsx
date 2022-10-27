import React from "react";
import { IProps } from "../../../ts/interface/DictionaryAnalysis.interface";
import { TitleContainer } from "./CustomTitle.style";

export const CustomTitle: React.FC<IProps> = ({
	titleText,
	fontSize,
	fontWeight,
	fontFamily,
	textColor,
	borderColor,
	backgroundColor,
	margin,
	padding,
}) => {
	return (
		<TitleContainer
			padding={padding}
			fontSize={fontSize ? fontSize : "1.8rem"}
			fontWeight={fontWeight ? fontWeight : "600"}
			fontFamily={
				fontFamily
					? fontFamily
					: `Lucida Sans, Lucida Sans Regular, Lucida Grande,
      Lucida Sans Unicode, Geneva, Verdana, sans-serif`
			}
			textColor={textColor ? textColor : "black"}
			borderColor={borderColor ? borderColor : "none"}
			margin={margin ? margin : "0"}
			backgroundColor={backgroundColor ? backgroundColor : "none"}
		>
			<h1>{titleText}</h1>
		</TitleContainer>
	);
};
