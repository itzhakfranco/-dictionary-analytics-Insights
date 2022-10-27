export const findRepeatedLetter = (arr: string[]) => {
	const newResults: any = {};

	for (let i = 0; i < arr.length; i++) {
		const currentWord = arr[i].trim();
		for (let j = 0; j < currentWord.length; j++) {
			const currentLetter = currentWord[j];
			const nextLetter = currentWord[j + 1];
			if (currentLetter === nextLetter) {
				if (newResults[currentLetter]) {
					newResults[currentLetter] = [
						...newResults[currentLetter],
						currentWord,
					];
				} else {
					newResults[currentLetter] = [currentWord];
				}
			}
		}
	}
	return newResults;
};

export const findWordStartWith = (arr: string[]) => {
	// todo create interface
	const newResults: any = {};

	for (let i = 0; i < arr.length; i++) {
		const currentWord = arr[i].trim();
		const firstLetter = currentWord.charAt(0);
		if (newResults[firstLetter]) {
			newResults[firstLetter] = [...newResults[firstLetter], currentWord];
		} else {
			newResults[firstLetter] = [currentWord];
		}
	}

	return newResults;
};
export const findWordEndWith = (arr: string[]) => {
	// todo create interface
	const newResults: any = {};

	for (let i = 0; i < arr.length; i++) {
		const currentWord = arr[i].trim();
		const firstLetter = currentWord.slice(-1);
		if (newResults[firstLetter]) {
			newResults[firstLetter] = [...newResults[firstLetter], currentWord];
		} else {
			newResults[firstLetter] = [currentWord];
		}
	}

	return newResults;
};
