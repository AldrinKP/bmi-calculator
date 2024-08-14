const InputField = ({ value, onChange, unit, className }) => {
	return (
		<div className={`${className ? className : ''}`}>
			<input
				type="text"
				value={value}
				onChange={onChange}
				className="px-6 py-5 text-gunmetal text-heading-m font-inter font-semibold lg:w-[238px] md:w-[300px] border-2 rounded-xl border-deb cursor-pointer"
			></input>
			<span className="ml-[-55px] text-blue font-inter text-heading-m font-semibold">
				{unit}
			</span>
		</div>
	);
};

export default InputField;
