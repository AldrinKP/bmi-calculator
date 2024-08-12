import { useState, useEffect } from 'react';
import { calculateImperialBMI } from '../../utilities';

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
					<div>
						<input
							type="text"
							value={imperialValues.ft}
							onChange={(e) => {
								handleInputChange('ft', e.target.value);
							}}
							className="px-6 py-5 text-gunmetal text-heading-m font-inter font-semibold w-[238px] border-2 rounded-xl border-deb cursor-pointer"
						></input>
						<span className="ml-[-55px] text-blue font-inter text-heading-m font-semibold">
							ft
						</span>
					</div>
				</div>
				<div className="content-end">
					<input
						type="text"
						value={imperialValues.in}
						onChange={(e) => {
							handleInputChange('in', e.target.value);
						}}
						className="px-6 py-5 text-gunmetal text-heading-m font-inter font-semibold w-[238px] border-2 rounded-xl border-deb cursor-pointer"
					></input>
					<span className="ml-[-55px] text-blue font-inter text-heading-m font-semibold">
						in
					</span>
				</div>
			</div>
			<div className="flex gap-[57px]">
				<div className="flex flex-col">
					<label className="mb-2 text-sm font-inter text-deb">
						Weight
					</label>
					<div>
						<input
							type="text"
							value={imperialValues.st}
							onChange={(e) => {
								handleInputChange('st', e.target.value);
							}}
							className="px-6 py-5 text-gunmetal text-heading-m font-inter font-semibold w-[238px] border-2 rounded-xl border-deb cursor-pointer"
						></input>
						<span className="ml-[-55px] text-blue font-inter text-heading-m font-semibold">
							st
						</span>
					</div>
				</div>
				<div className="content-end">
					<input
						type="text"
						value={imperialValues.lbs}
						onChange={(e) => {
							handleInputChange('lbs', e.target.value);
						}}
						className="px-6 py-5 text-gunmetal text-heading-m font-inter font-semibold w-[238px] border-2 rounded-xl border-deb cursor-pointer"
					></input>
					<span className="ml-[-55px] text-blue font-inter text-heading-m font-semibold">
						lbs
					</span>
				</div>
			</div>
		</>
	);
};

export default ImperialCalculator;
