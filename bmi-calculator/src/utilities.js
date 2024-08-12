export const calculateMetricBMI = (height, weight) => {
	const result = Math.round((weight / (height * height)) * 100000) / 10;
	return result.toFixed(1);
};

export const calculateImperialBMI = (ft, inches, st, lbs) => {
	const heightInInches = parseInt(ft) * 12 + parseInt(inches);
	const weightInPounds = parseInt(st) * 14 + parseInt(lbs);
	const result =
		Math.round((weightInPounds / heightInInches / heightInInches) * 7030) /
		10;
	return result.toFixed(1);
};
