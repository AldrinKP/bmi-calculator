import { useState, useEffect } from 'react';
import { calculateImperialBMI } from '../../utilities';
import InputField from './InputField';

const ImperialCalculator = ({ setBMIResult }) => {
	const [imperialValues, setImperialValues] = useState({
		ft: 0,
		in: 0,
		st: 0,
		lbs: 0,
	});

	const handleInputChange = (inputId, value) => {
		setImperialValues((prev) => ({
			...prev,
			[inputId]: value,
		}));
	};

	useEffect(() => {
		if (imperialValues.ft > 0 && imperialValues.st > 0) {
			setBMIResult(
				calculateImperialBMI(
					imperialValues.ft,
					imperialValues.in,
					imperialValues.st,
					imperialValues.lbs
				)
			);
		}
	}, [imperialValues, setBMIResult]);

	return (
		<>
			<div className="flex gap-[60px]">
				<div className="flex flex-col">
					<label className="mb-2 text-sm font-inter text-deb">
						Height
					</label>
					<InputField
						value={imperialValues.ft}
						onChange={(e) => {
							handleInputChange('ft', e.target.value);
						}}
						unit="ft"
					/>
				</div>
				<InputField
					value={imperialValues.in}
					onChange={(e) => {
						handleInputChange('in', e.target.value);
					}}
					unit="in"
					className="content-end"
				/>
			</div>
			<div className="flex gap-[57px]">
				<div className="flex flex-col">
					<label className="mb-2 text-sm font-inter text-deb">
						Weight
					</label>
					<InputField
						value={imperialValues.st}
						onChange={(e) => {
							handleInputChange('st', e.target.value);
						}}
						unit="st"
					/>
				</div>
				<InputField
					value={imperialValues.lbs}
					onChange={(e) => {
						handleInputChange('lbs', e.target.value);
					}}
					unit="lbs"
					className="content-end"
				/>
			</div>
		</>
	);
};

export default ImperialCalculator;
