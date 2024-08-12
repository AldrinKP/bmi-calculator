const CalculatorResult = ({ result }) => {
	if (!result) {
		return (
			<div className="flex flex-col gap-4">
				<h1 className="font-inter text-heading-m font-semibold tracking-tight">
					Welcome!
				</h1>
				<p className="font-inter text-sm">
					Enter your height and weight and you&apos;ll see your BMI
					result here
				</p>
			</div>
		);
	}
	return (
		<div className="flex justify-between items-center">
			<div className="basis-1/2 mr-[50px]">
				<p className="font-inter font-bold tracking-wider">
					Your BMI is...
				</p>
				<h1 className="font-inter font-semibold text-heading-xl">
					{result}
				</h1>
			</div>
			<p className="basis-1/2 font-inter text-sm tracking-wider">
				Your BMI suggests you&apos;re a healthy weight. Your ideal
				weight is between 63.3kgs - 85.2kgs.
			</p>
		</div>
	);
};

export default CalculatorResult;
