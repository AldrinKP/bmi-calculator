const TextGroup = ({ width, gap, children, className }) => {
	return (
		<div
			className={`flex flex-col gap-[${gap}px] w-[${width}px] ${
				className ? className : ''
			}`}
		>
			{children}
		</div>
	);
};

export default TextGroup;
