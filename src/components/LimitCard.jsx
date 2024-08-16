import TextGroup from './text/TextGroup';
import Heading from './text/Heading';
import BodyText from './text/BodyText';

const LimitCard = ({ icon, title, text, className }) => {
	return (
		<div
			className={`lg:absolute static lg:w-[365px] rounded-2xl shadow-custom-shadow bg-white ${
				className ? className : ''
			}`}
		>
			<TextGroup className="p-8 gap-4">
				<div className="flex gap-3 items-center">
					{icon}
					<Heading className="text-heading-s font-semibold">
						{title}
					</Heading>
				</div>
				<BodyText>{text}</BodyText>
			</TextGroup>
		</div>
	);
};

export default LimitCard;
