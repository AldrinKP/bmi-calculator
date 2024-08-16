import TextGroup from './text/TextGroup';
import Heading from './text/Heading';
import BodyText from './text/BodyText';
import { limitations } from '../assets/content';
import LimitCard from './LimitCard';

const LimitSection = () => {
	return (
		<div className="relative lg:block flex flex-col items-center gap-[56px] my-[120px] lg:w-[1160px] lg:h-[704px] mx-6">
			<TextGroup className="lg:gap-[35px] gap-8 lg:w-[564px] w-auto lg:text-start text-center lg:mx-0 mx-2">
				<Heading className="tracking-tight lg:text-heading-l text-[32px] font-semibold">
					Limitations of BMI
				</Heading>
				<BodyText>
					Although BMI is often a practical indicator of healthy
					weight, it is not suited for every person. Specific groups
					should carefully consider their BMI outcomes, and in certain
					cases, the measurement may not be beneficial to use.
				</BodyText>
			</TextGroup>
			<div className="hidden lg:block absolute left-[165px] top-[251px]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="94.664"
					height="122.518"
					viewBox="0 0 94.664 122.518"
				>
					<path
						fill="none"
						stroke="#ACC1DE"
						d="M94.498 122.046C65.99 112.032 7.28 73.613.498.046"
					/>
				</svg>
			</div>
			<div className="lg:block md:grid md:grid-cols-2 md:gap-y-6 md:gap-x-4 flex flex-col gap-4">
				<LimitCard
					icon={limitations.gender.icon}
					title={limitations.gender.title}
					text={limitations.gender.text}
					className="top-0 right-[99px]"
				/>
				<LimitCard
					icon={limitations.age.icon}
					title={limitations.age.title}
					text={limitations.age.text}
					className="top-[264px] right-[397px]"
				/>
				<LimitCard
					icon={limitations.muscle.icon}
					title={limitations.muscle.title}
					text={limitations.muscle.text}
					className="top-[264px] right-0"
				/>
				<LimitCard
					icon={limitations.pregnancy.icon}
					title={limitations.pregnancy.title}
					text={limitations.pregnancy.text}
					className="bottom-0 right-[199px]"
				/>
				<LimitCard
					icon={limitations.race.icon}
					title={limitations.race.title}
					text={limitations.race.text}
					className="bottom-0 left-[199px]"
				/>
			</div>
		</div>
	);
};

export default LimitSection;
143, 174, 207;
