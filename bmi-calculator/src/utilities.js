export const calculateMetricBMI = (system, height, weight) => {
	if (system === 'metric') {
		return Math.round((weight / (height * height)) * 100000) / 10;
	}
};
