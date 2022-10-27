import { DictionaryAnalysis } from "../../../ts/enum/DictionaryAnalysis.enum";

import { NavWrapper, NavbarTitle } from "./Navbar.style";

export default function Navbar() {
	return (
		<NavWrapper>
			<NavbarTitle>{DictionaryAnalysis.NAVBAR_TITLE}</NavbarTitle>
		</NavWrapper>
	);
}
