import { useState } from 'react';
import BodyText from './text/BodyText';
import Heading from './text/Heading';
import TextGroup from './text/TextGroup';

const calculateBMI = (system, height, weight) => {
	if (system === 'metric') {
		return Math.round((weight / (height * height)) * 100000) / 10;
	}
};

const CalculatorSection = () => {
	const [heightValue, setHeightValue] = useState(0);
	const [weightValue, setWeightValue] = useState(0);
	const [radioValue, setRadioValue] = useState('metric');

	const handleInputChange = (inputId, value) => {
		inputId === 'height' ? setHeightValue(value) : setWeightValue(value);
	};
	const handleRadioChange = (inputName) => {
		setRadioValue(inputName);
	};

	let resultContent = (
		<div className="flex flex-col gap-4">
			<h1 className="font-inter text-heading-m font-semibold tracking-tight">
				Welcome!
			</h1>
			<p className="font-inter text-sm">
				Enter your height and weight and you&apos;ll see your BMI result
				here
			</p>
		</div>
	);

	const metricInputFields = (
		<div className="flex gap-11">
			<div className="flex flex-col">
				<label className="mb-2 text-sm font-inter text-deb">
					Height
				</label>
				<div>
					<input
						type="text"
						value={heightValue}
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
						value={weightValue}
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

	const imperialInputFields = (
		<>
			<div className="flex gap-[60px]">
				<div className="flex flex-col">
					<label className="mb-2 text-sm font-inter text-deb">
						Height
					</label>
					<div>
						<input
							type="text"
							value={heightValue}
							onChange={(e) => {
								handleInputChange('height', e.target.value);
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
						value={weightValue}
						onChange={(e) => {
							handleInputChange('weight', e.target.value);
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
						Height
					</label>
					<div>
						<input
							type="text"
							value={heightValue}
							onChange={(e) => {
								handleInputChange('height', e.target.value);
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
						value={weightValue}
						onChange={(e) => {
							handleInputChange('weight', e.target.value);
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

	if (heightValue > 0 && weightValue > 0) {
		const BMI = calculateBMI(radioValue, heightValue, weightValue);
		resultContent = (
			<div className="flex justify-between items-center">
				<div className="basis-1/2 mr-[50px]">
					<p className="font-inter font-bold tracking-wider">
						Your BMI is...
					</p>
					<h1 className="font-inter font-semibold text-heading-xl">
						{BMI}
					</h1>
				</div>
				<p className="basis-1/2 font-inter text-sm tracking-wider">
					Your BMI suggests you&apos;re a healthy weight. Your ideal
					weight is between 63.3kgs - 85.2kgs.
				</p>
			</div>
		);
	}

	return (
		<div className="ml-6 relative pb-[84px] h-[737px]">
			<div className="absolute -z-10 bg-gradient-to-tl from-[#D6E6FE] from-0% h-[737px] w-[978px] rounded-b-[35px]"></div>
			<div className="pt-[72px] pl-[116px]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="64"
					height="64"
					fill="none"
					viewBox="0 0 64 64"
				>
					<path
						fill="#B3D3F1"
						d="M32 2.627c-.543 0-1.094.004-1.634.037a29.466 29.466 0 0 0-3.561.44c-.13.023-.257.049-.386.074-.11.021-.22.032-.33.055-.062.01-.123.024-.184.037-.06.013-.122.023-.184.036a29.34 29.34 0 0 0-1.909.478c-.061.017-.123.037-.184.055-.031.009-.06.027-.091.036-.091.028-.186.046-.276.074-.172.058-.341.126-.514.183-.363.121-.726.233-1.083.368-.044.013-.085.04-.129.055-.54.206-1.073.442-1.597.679-.533.24-1.063.482-1.579.753-.516.272-1.025.56-1.524.863-.023.014-.05.022-.074.036-.473.287-.939.587-1.395.9a29.441 29.441 0 0 0-2.185 1.67c-.267.223-.53.449-.79.68-.047.043-.098.085-.146.129-.277.251-.541.509-.808.77-.037.037-.073.075-.11.11-.365.362-.72.723-1.065 1.103-.209.229-.406.462-.606.697-.2.234-.395.476-.588.716-.389.484-.762.98-1.12 1.488-.229.326-.445.655-.66.99-.022.034-.053.06-.075.093l-.128.202c-.016.025-.039.047-.055.073-.052.084-.097.172-.147.257-.194.328-.384.659-.57.992-.044.081-.101.156-.146.238v.018c-.223.412-.439.826-.643 1.249-.202.42-.386.838-.569 1.267-.051.12-.097.246-.147.367-.11.269-.227.535-.33.808-.057.152-.11.306-.165.459-.044.122-.087.245-.129.367h-.018c-.055.163-.095.332-.147.496-.015.048-.022.099-.036.147-.01.031-.027.06-.037.092-.063.213-.122.427-.183.642v.018c-.01.026-.03.048-.037.074-.022.078-.033.16-.055.239-.068.25-.14.5-.202.752l-.055.22c-.023.098-.034.198-.055.294-.088.39-.168.782-.239 1.175-.01.056-.027.11-.037.166-.006.024-.014.049-.018.073-.057.324-.101.645-.147.973 0 .02-.016.036-.018.056-.017.124-.04.242-.055.367h.018a29.55 29.55 0 0 0-.129 1.248c-.006.043-.014.086-.018.129h-.018c-.02.255-.026.514-.036.771V30.516a29.63 29.63 0 0 0-.037 1.487v.018c0 .5.012.992.036 1.487v.018c.018.369.043.737.074 1.102.01.116.026.232.036.349v.073c.01.11.024.221.037.33.025.223.06.442.091.662.026.184.045.368.074.55l.018.11c.069.429.133.846.22 1.267.095.456.197.912.313 1.36.006.006.014.01.018.017v.019c.108.415.223.822.348 1.23.016.05.04.097.056.147.117.37.238.737.367 1.101.016.044.04.085.055.129.04.109.07.222.11.33.072.19.145.38.22.57.076.19.16.38.24.569.184.439.38.873.587 1.303.177.37.358.741.55 1.102.03.056.062.11.092.165v.018c.168.308.337.598.514.9.064.107.138.206.202.312.159.257.312.516.478.771l.11.165c.149.225.304.44.459.661.067.097.133.197.202.294.107.15.22.293.33.44.16.215.312.434.478.643l.055.074c.089.112.184.22.275.33.046.057.1.109.147.165.13.158.251.323.386.478.148.17.308.329.458.495.143.158.276.323.423.478.014.016.04.021.055.037.162.17.33.33.496.495.112.115.215.238.33.35.074.072.145.148.22.22.148.14.306.269.46.404.13.114.255.234.385.348.009.006.012.013.018.019.109.095.22.181.33.275.165.14.328.286.496.422.269.22.55.433.826.643.056.042.11.087.165.129.036.025.075.047.11.073.33.243.652.486.992.716.344.234.693.46 1.047.68.019.011.036.025.055.036l.091.055c.232.14.463.27.698.404.176.1.355.196.533.294.11.06.218.124.33.183.292.154.584.297.881.44.017.009.038.01.055.02.195.092.391.185.588.274.142.065.28.14.422.203.096.041.196.072.294.11.087.033.17.074.257.11.291.12.585.238.881.349l.202.073.055.018c.013.006.024.014.037.018.304.11.61.212.918.313.085.027.172.046.257.073l.239.073c.153.048.304.103.459.147.262.076.525.153.79.22.388.1.78.192 1.174.276l.166.037c.067.014.134.023.202.036.44.088.875.17 1.322.239.4.06.806.102 1.211.146.044.007.086.015.129.019.11.011.22.026.33.036l.22.018c.281.025.562.039.845.055.08.006.16.015.239.019a33.794 33.794 0 0 0 1.506.036 29.14 29.14 0 0 0 2.974-.147h.036a30.72 30.72 0 0 0 1.744-.239c.087-.014.171-.022.257-.036.111-.02.22-.035.33-.056.36-.066.728-.14 1.084-.22.074-.016.147-.038.22-.055.204-.047.405-.098.606-.147.043-.01.086-.026.129-.036.06-.016.123-.02.183-.037.117-.03.233-.059.349-.091l.312-.092c.174-.05.342-.113.514-.166.128-.039.259-.068.386-.11.012-.005.023-.014.037-.018.313-.103.628-.217.936-.33l.294-.11.33-.13c.39-.152.776-.326 1.157-.495.06-.026.124-.046.184-.073l.165-.074a29.152 29.152 0 0 0 4.517-2.588c.278-.194.554-.385.826-.588l.22-.165c.051-.04.095-.089.147-.129.29-.224.582-.445.863-.68a29.546 29.546 0 0 0 1.818-1.651l.091-.092.055-.055c.3-.3.594-.606.881-.919.03-.031.063-.06.092-.091a29.717 29.717 0 0 0 1.634-1.983 29.276 29.276 0 0 0 1.634-2.369c.035-.056.076-.11.11-.165.1-.163.198-.33.294-.496.133-.22.263-.436.386-.66.01-.02.026-.036.037-.056v-.018c.232-.428.45-.863.66-1.304.196-.407.393-.83.57-1.248v-.018c.023-.056.05-.11.074-.166.162-.388.315-.78.459-1.175.049-.133.082-.27.128-.404.09-.255.175-.512.257-.77.128-.401.257-.804.367-1.212.11-.405.202-.82.294-1.23.109-.481.21-.962.294-1.451v-.018c.069-.398.131-.791.184-1.194.012-.098.025-.195.036-.293.053-.448.095-.905.128-1.36.05-.691.09-1.387.092-2.092V32c0-1.86-.184-3.672-.514-5.435-.03-.159-.06-.32-.092-.478-.032-.16-.075-.318-.11-.477a29.243 29.243 0 0 0-1.708-5.306c-.062-.143-.136-.28-.202-.422-.093-.201-.18-.406-.275-.606-.018-.037-.038-.073-.055-.11v-.019a29.808 29.808 0 0 0-.587-1.138v-.018c-.197-.361-.414-.714-.625-1.065-.03-.05-.062-.098-.092-.147-.009-.004.01-.016 0-.018a29.57 29.57 0 0 0-.587-.918 29.368 29.368 0 0 0-1.616-2.222 29.615 29.615 0 0 0-1.725-1.946l-.055-.055-.037-.037c-.3-.31-.605-.604-.918-.9a29.581 29.581 0 0 0-2.901-2.423 29.204 29.204 0 0 0-2.02-1.359c-.009-.004-.01-.014-.018-.018a29.383 29.383 0 0 0-1.689-.936c-.43-.224-.862-.44-1.303-.643-.44-.202-.89-.389-1.34-.57-.013-.005-.025-.013-.038-.018a29.18 29.18 0 0 0-4.204-1.322l-.147-.036c-.176-.04-.355-.074-.533-.11a25.55 25.55 0 0 0-.77-.147 29.03 29.03 0 0 0-2.13-.312c-.477-.05-.968-.102-1.451-.13-.036 0-.074.003-.11 0h-.018a29.633 29.633 0 0 0-1.506-.036l.002.003Zm-1.946 2.717c.794.099 1.587.207 2.387.312 2.759.365 5.377.699 7.84.918a26.627 26.627 0 0 1 7.087 3.562c-2.03.134-4.192.186-6.481.092-3.055-.129-6.231-.482-9.4-.9-2.24-.295-4.354-.61-6.39-.863-1.605-.2-3.215-.359-4.829-.477a26.548 26.548 0 0 1 9.786-2.644Zm-10.538 6.188a75.78 75.78 0 0 1 6.352.367c2.168.209 4.356.496 6.573.79 3.137.414 6.1.8 8.85 1.01a81.603 81.603 0 0 0 10.318.128 26.888 26.888 0 0 1 2.093 2.588 52.214 52.214 0 0 1-3.488.515c-2.78.308-5.942.468-9.327.33-3.055-.129-6.231-.482-9.4-.9-2.24-.295-4.354-.61-6.39-.863a91.72 91.72 0 0 0-5.82-.55 68.51 68.51 0 0 0-3.764-.129 74.64 74.64 0 0 0-3.452.055c-.22.01-.412.026-.624.037a27.03 27.03 0 0 1 3.158-3.195 53.34 53.34 0 0 1 4.92-.184Zm0 7.032c2.054.023 4.184.158 6.352.367s4.356.496 6.573.79c3.137.414 6.1.8 8.85 1.009 3.04.236 5.901.27 8.482.202a105.54 105.54 0 0 0 6.39-.367c.339.715.66 1.437.936 2.185a51.46 51.46 0 0 1-6.885 1.23c-2.78.308-5.942.45-9.327.312-.509-.022-1.026-.041-1.542-.074-1.92-1.813-4.495-2.937-7.344-2.937-1.964 0-3.797.53-5.38 1.45-.507-.07-1.015-.138-1.524-.202a91.727 91.727 0 0 0-5.82-.55c-1.3-.081-2.557-.12-3.764-.129a74.64 74.64 0 0 0-3.452.055c-1.87.073-3.506.214-4.957.349a26.55 26.55 0 0 1 1.175-2.57 41.402 41.402 0 0 1 3.268-.606 53.815 53.815 0 0 1 7.969-.514Zm0 7.032c1.227.014 2.49.078 3.763.165a10.672 10.672 0 0 0-1.615 3.433 71.394 71.394 0 0 0-9.602-.257c-2.175.086-4.094.266-5.692.422-.362.036-.649.06-.973.092.067-.714.17-1.415.293-2.111a43.049 43.049 0 0 1 5.857-1.23 53.802 53.802 0 0 1 7.969-.514Zm38.813 1.799c.114.654.192 1.313.257 1.983-.395.116-.813.232-1.267.349a51.424 51.424 0 0 1-7.105 1.285 62.475 62.475 0 0 1-7.528.367 10.617 10.617 0 0 0-.826-3.562c2.826.197 5.497.211 7.913.147 2.581-.069 4.88-.231 6.794-.404.678-.061 1.2-.113 1.762-.165Zm-38.813 5.232c.59.008 1.195.047 1.799.074.081 1.264.381 2.455.863 3.562a81.05 81.05 0 0 0-2.901-.22 71.458 71.458 0 0 0-7.216-.074 96.67 96.67 0 0 0-5.691.404c-.299.03-.485.052-.716.073a26.69 26.69 0 0 1-.257-1.983c.077-.024.14-.05.22-.073a43.097 43.097 0 0 1 5.93-1.248 53.819 53.819 0 0 1 7.969-.515Zm39.107 1.763a26.57 26.57 0 0 1-.276 2.093c-.328.097-.661.2-1.028.294-1.931.497-4.325.958-7.105 1.267-2.78.309-5.942.45-9.327.312-.085-.007-.17-.014-.257-.018a10.647 10.647 0 0 0 1.707-3.489c2.648.172 5.157.226 7.436.165 2.581-.068 4.88-.25 6.794-.422.803-.072 1.41-.139 2.056-.202Zm-39.107 5.27a72.42 72.42 0 0 1 5.287.275 10.658 10.658 0 0 0 7.198 2.79c1.859 0 3.598-.47 5.122-1.303 1.435.172 2.829.32 4.168.422 3.04.236 5.901.253 8.482.184 2.581-.069 4.88-.231 6.794-.404l.403-.037c-.34.885-.746 1.734-1.175 2.57-1.622.36-3.483.685-5.581.919-2.78.308-5.942.45-9.327.312-3.055-.13-6.231-.482-9.4-.9-2.24-.296-4.354-.61-6.39-.863a91.102 91.102 0 0 0-5.82-.532c-1.3-.081-2.557-.139-3.764-.147a73.233 73.233 0 0 0-3.452.073 90.595 90.595 0 0 0-4.278.276 26.429 26.429 0 0 1-.936-2.204 43.463 43.463 0 0 1 4.7-.918 53.803 53.803 0 0 1 7.969-.514Zm0 7.031c2.054.024 4.184.158 6.352.368 2.168.209 4.356.514 6.573.808 3.137.414 6.1.781 8.85.99 3.04.237 5.901.272 8.482.203a84.873 84.873 0 0 0 2.92-.129 27.047 27.047 0 0 1-3.177 3.269c-2.61.255-5.52.347-8.629.22-3.055-.129-6.231-.464-9.4-.882-2.24-.295-4.354-.628-6.39-.88a91.513 91.513 0 0 0-5.82-.552 68.13 68.13 0 0 0-3.764-.11c-1.134-.008-2.22 0-3.25.037a26.814 26.814 0 0 1-2.093-2.608c.445-.076.9-.152 1.377-.22a53.763 53.763 0 0 1 7.969-.514Zm-1.836 7.05c.597-.015 1.216-.005 1.836 0 2.054.024 4.184.159 6.352.368s4.356.478 6.573.771c3.137.415 6.1.8 8.85 1.01.816.063 1.606.105 2.387.147a26.572 26.572 0 0 1-10.87 2.68c-.441-.055-.88-.107-1.322-.165-2.24-.295-4.353-.591-6.389-.844-.262-.033-.513-.062-.771-.092a26.604 26.604 0 0 1-7.803-3.838c.382-.018.762-.026 1.157-.036Z"
					/>
				</svg>

				<div className="flex">
					<TextGroup width="564" gap="35" className="mt-[99px]">
						<Heading
							size="xl"
							weight="bold"
							className="tracking-[-0.075em]"
						>
							Body Mass <br /> Index Calculator
						</Heading>
						<BodyText className="w-[465px]">
							Better understand your weight in relation to your
							height using our body mass index (BM) calculator.
							While BMI is not the sole determinant of a healthy
							weight, it offers a valuable starting point to
							evaluate your overall health and well-being.
						</BodyText>
					</TextGroup>
					<div className="rounded-2xl bg-white w-[564px] shadow-custom-shadow">
						<div className="flex flex-col p-8 gap-8">
							<h3 className="font-inter font-semibold text-heading-m tracking-tighter">
								Enter your details below
							</h3>
							<div className="flex">
								<div className="flex grow items-center mr-8">
									<input
										type="radio"
										name="metric"
										checked={radioValue === 'metric'}
										onChange={() =>
											handleRadioChange('metric')
										}
										className="form-radio text-blue mr-[18px] w-[31px] h-[31px] cursor-pointer"
									/>
									<label className="font-inter font-bold text-gunmetal">
										Metric
									</label>
								</div>
								<div className="flex grow items-center">
									<input
										type="radio"
										name="imperial"
										checked={radioValue === 'imperial'}
										onChange={() =>
											handleRadioChange('imperial')
										}
										className="form-radio text-blue mr-[18px] w-[31px] h-[31px] cursor-pointer"
									/>
									<label className="font-inter font-bold text-gunmetal">
										Imperial
									</label>
								</div>
							</div>
							{radioValue === 'metric'
								? metricInputFields
								: imperialInputFields}
							<div className="bg-blue text-white p-8 rounded-l-2xl rounded-r-[100px]">
								{resultContent}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CalculatorSection;
