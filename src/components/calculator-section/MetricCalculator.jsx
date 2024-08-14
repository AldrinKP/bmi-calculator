import { useEffect, useState } from 'react';
import { calculateMetricBMI } from '../../utilities';
import InputField from './InputField';

const MetricCalculator = ({ setBMIResult }) => {
	const [metricValues, setMetricValues] = useState({ height: 0, weight: 0 });

	const handleInputChange = (inputId, value) => {
		setMetricValues((prev) => ({
			...prev,
			[inputId]: value,
		}));
	};

	useEffect(() => {
		if (metricValues.height > 0 && metricValues.weight > 0) {
			setBMIResult(
				calculateMetricBMI(metricValues.height, metricValues.weight)
			);
		}
	}, [metricValues, setBMIResult]);

	return (
		<div className="flex gap-11">
			<div className="flex flex-col">
				<label className="mb-2 text-sm font-inter text-deb">
					Height
				</label>
				<InputField
					value={metricValues.height}
					onChange={(e) => {
						handleInputChange('height', e.target.value);
					}}
					unit="cm"
				/>
			</div>
			<div className="flex flex-col">
				<label className="mb-2 text-sm font-inter text-deb">
					Weight
				</label>
				<InputField
					value={metricValues.weight}
					onChange={(e) => {
						handleInputChange('weight', e.target.value);
					}}
					unit="kg"
				/>
			</div>
		</div>
	);
};

export default MetricCalculator;
