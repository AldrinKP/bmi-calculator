export const calculateMetricBMI = (height, weight) => {
	return Math.round((weight / (height * height)) * 100000) / 10;
};
