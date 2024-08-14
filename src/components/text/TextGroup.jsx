const TextGroup = ({ children, className }) => {
	return (
		<div className={`flex flex-col ${className ? className : ''}`}>
			{children}
		</div>
	);
};

export default TextGroup;
