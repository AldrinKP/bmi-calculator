/* eslint-disable react/prop-types */
const Heading = ({ size, weight, className, children }) => {
	return (
		<h1
			className={`font-inter text-heading-${size} font-${weight} text-gunmetal leading-heading ${
				className ? className : ''
			}`}
		>
			{children}
		</h1>
	);
};

export default Heading;
