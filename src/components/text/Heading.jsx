/* eslint-disable react/prop-types */
const Heading = ({ className, children }) => {
	return (
		<h1
			className={`font-inter text-gunmetal leading-heading ${
				className ? className : ''
			}`}
		>
			{children}
		</h1>
	);
};

export default Heading;
