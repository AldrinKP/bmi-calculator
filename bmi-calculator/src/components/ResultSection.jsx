import sushiMan from '../assets/images/image-man-eating.webp';

const ResultSection = () => {
	return (
		<div className="flex justify-between mt-[113px] mx-auto w-[1160px]">
			<div className="relative w-[564px]">
				<div className="absolute -z-10 bottom-0 w-[564px] bg-[#E7F5FE] rounded-[32px]"></div>
				<img src={sushiMan} alt="Man eating sushi" />
			</div>
			<div className="flex flex-col gap-[35px] w-[465px] mt-[184px]">
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
			</div>
		</div>
	);
};

export default ResultSection;
