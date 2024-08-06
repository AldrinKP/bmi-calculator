/* eslint-disable react/prop-types */
const TextGroup = ({ width, gap, children }) => {
	return (
		<div className={`flex flex-col gap-[${gap}px] w-[${width}px]`}>
			{children}
		</div>
	);
};

export default TextGroup;
