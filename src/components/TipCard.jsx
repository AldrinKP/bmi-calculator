const TipCard = ({ icon, children }) => {
	return (
		<div className="flex flex-col w-[365px]">
			<div className="mb-[45px]">{icon}</div>
			{children}
		</div>
	);
};

export default TipCard;
