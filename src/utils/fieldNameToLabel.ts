export const fieldNameToLabel = (fieldName: string) => {
	return fieldName
		.split('_')
		.map((str) => {
			const letters = [...str];
			return [letters.shift()?.toUpperCase(), ...letters].join('');
		})
		.join(' ');
};
