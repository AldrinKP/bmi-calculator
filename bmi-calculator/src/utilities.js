export const calculateMetricBMI = (height, weight) => {
	return Math.round((weight / (height * height)) * 100000) / 10;
};

export const calculateImperialBMI = (ft, inches, st, lbs) => {
	const heightInInches = parseInt(ft) * 12 + parseInt(inches);
	const weightInPounds = parseInt(st) * 14 + parseInt(lbs);
	return (
		Math.round((weightInPounds / heightInInches / heightInInches) * 7030) /
		10
	);
};
