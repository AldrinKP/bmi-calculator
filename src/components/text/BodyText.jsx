const BodyText = ({ className, children }) => {
	return (
		<p
			className={`font-inter text-deb text-body-m leading-normal ${
				className ? className : ''
			}`}
		>
			{children}
		</p>
	);
};

export default BodyText;
