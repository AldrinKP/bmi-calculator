export const calculateMetricBMI = (height, weight) => {
	const BMI = Math.round((weight / (height * height)) * 100000) / 10;
	const weightClass = calculateWeightClass(BMI);
	const lowerWeight = 18.5 * Math.pow(height / 100, 2);
	const upperWeight = 24.9 * Math.pow(height / 100, 2);
	const range = `${lowerWeight.toFixed(1)}kgs - ${upperWeight.toFixed(1)}kgs`;
	return { bmi: BMI.toFixed(1), weightClass, range };
};

export const calculateImperialBMI = (ft, inches, st, lbs) => {
	const heightInInches = parseInt(ft) * 12 + parseInt(inches);
	const weightInPounds = parseInt(st) * 14 + parseInt(lbs);
	const BMI =
		Math.round((weightInPounds / heightInInches / heightInInches) * 7030) /
		10;

	const weightClass = calculateWeightClass(BMI);

	const lowerWeight = (18.5 * Math.pow(heightInInches, 2)) / 703;
	const lowerWeightST = Math.floor(lowerWeight / 14);
	const lowerWeightLBS = Math.floor(lowerWeight % 14);

	const upperWeight = (24.9 * Math.pow(heightInInches, 2)) / 703;
	const upperWeightST = Math.floor(upperWeight / 14);
	const upperWeightLBS = Math.floor(upperWeight % 14);

	const range = `${lowerWeightST}st ${lowerWeightLBS}lbs - ${upperWeightST}st ${upperWeightLBS}lbs`;
	return { bmi: BMI.toFixed(1), weightClass, range };
};

const calculateWeightClass = (BMI) => {
	if (BMI < 18.5) {
		return 'underweight';
	} else if (BMI > 24.9) {
		return 'overweight';
	} else {
		return 'a healthy weight';
	}
};
