import sushiMan from '../assets/images/image-man-eating.webp';
import TextGroup from './text/TextGroup';
import Heading from './text/Heading';
import BodyText from './text/BodyText';

const ResultSection = () => {
	return (
		<div className="flex md:flex-row flex-col relative lg:justify-between md:gap-[75px] gap-12 mt-[113px] lg:w-[1160px] md:w-[841px] w-full">
			<div className="absolute right-[27px] -top-[52px] lg:block hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="85.831"
					height="200.501"
					viewBox="0 0 85.831 200.501"
				>
					<path
						fill="none"
						stroke="#ACC1DE"
						d="M82.719.092c7.831 41.7 2.31 140.08-82.43 200"
					/>
				</svg>
			</div>
			<div className="relative lg:w-[564px] md:w-[435px] w-full">
				<div className="absolute -z-10 bottom-0 bg-[#E7F5FE] rounded-[32px]"></div>
				<img src={sushiMan} alt="Man eating sushi" />
			</div>
			<TextGroup className="lg:mt-[184px] md:m-0 mx-4 md:justify-center lg:gap-[35px] gap-[32px] lg:w-[465px] md:w-[331px]">
				<Heading className="tracking-tight lg:text-heading-l text-[32px] font-semibold">
					What your BMI result means
				</Heading>
				<BodyText>
					A BMI range of 18.5 to 24.9 is considered a &apos;healthy
					weight&apos; Maintaining a healthy weight may lower your
					chances of experiencing health issues later on, such as
					obesity and type 2 diabetes. Aim for a nutritious diet with
					reduced fat and sugar content, incorporating ample fruits
					and vegetables. Additionally, strive for regular physical
					activity, ideally about 30 minutes daily for five days a
					week.
				</BodyText>
			</TextGroup>
		</div>
	);
};

export default ResultSection;
