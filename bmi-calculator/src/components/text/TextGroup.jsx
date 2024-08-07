const TextGroup = ({ width, gap, children, className }) => {
	return (
		<div
			className={`flex flex-col gap-[${gap}px] ${
				width ? `w-[${width}px]` : ''
			} ${className ? className : ''}`}
		>
			{children}
		</div>
	);
};

export default TextGroup;
