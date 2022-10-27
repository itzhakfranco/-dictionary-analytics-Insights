export interface DictionaryHash {
	[key: string]: string[];
}

export interface MainContainerProps {
	children: React.ReactNode;
}
export interface DictionaryAnalysisState {
	startWithCount: number;
	endWithCount: number;
	repeatedLetterCount: number;
	isLoading: boolean;
	userQuery: string;
}

export interface IProps {
	children?: React.ReactNode;
	titleText?: any;
	fontSize?: string;
	fontWeight?: string;
	fontFamily?: string;
	textColor?: string;
	borderColor?: string;
	backgroundColor?: string;
	margin?: string;
	padding?: string;
}

export interface PageTextContainerProps {
	children: React.ReactNode;
	padding?: string;
	fontSize?: string;
	fontWeight?: string;
	fontFamily?: string;
	textColor?: string;
	borderColor?: string;
	borderRadius?: string;
	backgroundColor?: string;
	translate?: string;
	margin?: string;
}
