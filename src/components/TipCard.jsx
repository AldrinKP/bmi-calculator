const TipCard = ({ icon, children }) => {
	return (
		<div className="flex md:max-lg:flex-row flex-col gap-8 md:gap-10 lg:gap-[45px] lg:max-w-[365px] w-auto">
			<div className="content-center">{icon}</div>
			{children}
		</div>
	);
};

export default TipCard;
