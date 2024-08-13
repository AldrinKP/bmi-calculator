import { useEffect, useState } from 'react';
import { calculateMetricBMI } from '../../utilities';

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
				<div>
					<input
						type="text"
						value={metricValues.height}
						onChange={(e) => {
							handleInputChange('height', e.target.value);
						}}
						className="px-6 py-5 text-gunmetal text-heading-m font-inter font-semibold w-[238px] border-2 rounded-xl border-deb cursor-pointer"
					></input>
					<span className="ml-[-55px] text-blue font-inter text-heading-m font-semibold">
						cm
					</span>
				</div>
			</div>
			<div className="flex flex-col">
				<label className="mb-2 text-sm font-inter text-deb">
					Weight
				</label>
				<div>
					<input
						type="text"
						value={metricValues.weight}
						onChange={(e) => {
							handleInputChange('weight', e.target.value);
						}}
						className="px-6 py-5 text-gunmetal text-heading-m font-inter font-semibold w-[238px] border-2 rounded-xl border-deb cursor-pointer"
					></input>
					<span className="ml-[-55px] text-blue font-inter text-heading-m font-semibold">
						kg
					</span>
				</div>
			</div>
		</div>
	);
};

export default MetricCalculator;
