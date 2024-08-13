import TextGroup from './text/TextGroup';
import Heading from './text/Heading';
import BodyText from './text/BodyText';
import { limitations } from '../assets/content';

const LimitSection = () => {
	return (
		<div className="relative my-[120px] w-[1160px] h-[704px]">
			<TextGroup width="564" gap="35">
				<Heading size="l" weight="semibold" className="tracking-tight">
					Limitations of BMI
				</Heading>
				<BodyText>
					Although BMI is often a practical indicator of healthy
					weight, it is not suited for every person. Specific groups
					should carefully consider their BMI outcomes, and in certain
					cases, the measurement may not be beneficial to use.
				</BodyText>
			</TextGroup>
			<div className="absolute left-[165px] top-[251px]">
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

			<div className="absolute top-0 right-[99px] w-[365px] rounded-2xl shadow-custom-shadow bg-white">
				<TextGroup gap="16" className="p-8">
					<div className="flex gap-3 items-center">
						{limitations.gender.icon}
						<Heading size="s" weight="semibold">
							{limitations.gender.title}
						</Heading>
					</div>
					<BodyText>{limitations.gender.text}</BodyText>
				</TextGroup>
			</div>
			<div className="absolute flex gap-8 top-[264px] right-0">
				<div className="w-[365px] rounded-2xl shadow-custom-shadow bg-white">
					<TextGroup gap="16" className="p-8">
						<div className="flex gap-3 items-center">
							{limitations.age.icon}
							<Heading size="s" weight="semibold">
								{limitations.age.title}
							</Heading>
						</div>
						<BodyText>{limitations.age.text}</BodyText>
					</TextGroup>
				</div>
				<div className="w-[365px] rounded-2xl shadow-custom-shadow bg-white">
					<TextGroup gap="16" className="p-8">
						<div className="flex gap-3 items-center">
							{limitations.muscle.icon}
							<Heading size="s" weight="semibold">
								{limitations.muscle.title}
							</Heading>
						</div>
						<BodyText>{limitations.muscle.text}</BodyText>
					</TextGroup>
				</div>
			</div>
			<div className="absolute flex gap-8 bottom-0 left-[199px]">
				<div className="w-[365px] rounded-2xl shadow-custom-shadow bg-white">
					<TextGroup gap="16" className="p-8">
						<div className="flex gap-3 items-center">
							{limitations.pregnancy.icon}
							<Heading size="s" weight="semibold">
								{limitations.pregnancy.title}
							</Heading>
						</div>
						<BodyText>{limitations.pregnancy.text}</BodyText>
					</TextGroup>
				</div>
				<div className="w-[365px] rounded-2xl shadow-custom-shadow bg-white">
					<TextGroup gap="16" className="p-8">
						<div className="flex gap-3 items-center">
							{limitations.race.icon}
							<Heading size="s" weight="semibold">
								{limitations.race.title}
							</Heading>
						</div>
						<BodyText>{limitations.race.text}</BodyText>
					</TextGroup>
				</div>
			</div>
		</div>
	);
};

export default LimitSection;
143, 174, 207;
