import sushiMan from '../assets/images/image-man-eating.webp';
import TextGroup from './text/TextGroup';

const ResultSection = () => {
	return (
		<div className="flex relative justify-between mt-[113px] mx-auto w-[1160px]">
			<div className="absolute right-[27px] -top-[52px]">
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
			<div className="relative w-[564px]">
				<div className="absolute -z-10 bottom-0 w-[564px] bg-[#E7F5FE] rounded-[32px]"></div>
				<img src={sushiMan} alt="Man eating sushi" />
			</div>
			<TextGroup gap="35" width="465" className="mt-[184px]">
				<h1 className="font-inter text-gunmetal text-heading-l font-semibold tracking-tight leading-heading">
					What your BMI result means
				</h1>
				<p className="font-inter text-deb text-body-m">
					A BMI range of 18.5 to 24.9 is considered a &apos;healthy
					weight&apos; Maintaining a healthy weight may lower your
					chances of experiencing health issues later on, such as
					obesity and type 2 diabetes. Aim for a nutritious diet with
					reduced fat and sugar content, incorporating ample fruits
					and vegetables. Additionally, strive for regular physical
					activity, ideally about 30 minutes daily for five days a
					week.
				</p>
			</TextGroup>
		</div>
	);
};

export default ResultSection;
