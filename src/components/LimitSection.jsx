import TextGroup from './text/TextGroup';
import Heading from './text/Heading';
import BodyText from './text/BodyText';
import { limitations } from '../assets/content';

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
				<div className="lg:absolute static top-0 right-[99px] lg:w-[365px] rounded-2xl shadow-custom-shadow bg-white">
					<TextGroup className="p-8 gap-4">
						<div className="flex gap-3 items-center">
							{limitations.gender.icon}
							<Heading className="text-heading-s font-semibold">
								{limitations.gender.title}
							</Heading>
						</div>
						<BodyText>{limitations.gender.text}</BodyText>
					</TextGroup>
				</div>
				<div className="lg:absolute static top-[264px] right-[397px] lg:w-[365px] rounded-2xl shadow-custom-shadow bg-white">
					<TextGroup className="p-8 gap-4">
						<div className="flex gap-3 items-center">
							{limitations.age.icon}
							<Heading className="text-heading-s font-semibold">
								{limitations.age.title}
							</Heading>
						</div>
						<BodyText>{limitations.age.text}</BodyText>
					</TextGroup>
				</div>
				<div className="lg:absolute static top-[264px] right-0 lg:w-[365px] rounded-2xl shadow-custom-shadow bg-white">
					<TextGroup className="p-8 gap-4">
						<div className="flex gap-3 items-center">
							{limitations.muscle.icon}
							<Heading className="text-heading-s font-semibold">
								{limitations.muscle.title}
							</Heading>
						</div>
						<BodyText>{limitations.muscle.text}</BodyText>
					</TextGroup>
				</div>
				<div className="lg:absolute static bottom-0 right-[199px] lg:w-[365px] rounded-2xl shadow-custom-shadow bg-white">
					<TextGroup className="p-8 gap-4">
						<div className="flex gap-3 items-center">
							{limitations.pregnancy.icon}
							<Heading className="text-heading-s font-semibold">
								{limitations.pregnancy.title}
							</Heading>
						</div>
						<BodyText>{limitations.pregnancy.text}</BodyText>
					</TextGroup>
				</div>
				<div className="lg:block md:col-span-2 md:flex md:justify-center">
					<div className="lg:absolute static bottom-0 left-[199px] lg:w-[365px] md:w-1/2 rounded-2xl shadow-custom-shadow bg-white">
						<TextGroup className="p-8 gap-4">
							<div className="flex gap-3 items-center">
								{limitations.race.icon}
								<Heading className="text-heading-s font-semibold">
									{limitations.race.title}
								</Heading>
							</div>
							<BodyText>{limitations.race.text}</BodyText>
						</TextGroup>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LimitSection;
143, 174, 207;
