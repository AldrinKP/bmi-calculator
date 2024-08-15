const TipCard = ({ icon, children }) => {
	return (
		<div className="flex gap-[45px] flex-col w-[365px]">
			<div>{icon}</div>
			{children}
		</div>
	);
};

export default TipCard;
