export const calculateMetricBMI = (height, weight) => {
	return Math.round((weight / (height * height)) * 100000) / 10;
};

export const calculateImperialBMI = (ft, inches, st, lbs) => {
	const heightInInches = ft * 12 + inches;
	const weightInPounds = st * 14 + lbs;
	return (
		Math.round((weightInPounds / heightInInches / heightInInches) * 7030) /
		10
	);
};
