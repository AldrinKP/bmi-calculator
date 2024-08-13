import CalculatorSection from './components/calculator-section/CalculatorSection';
import LimitSection from './components/LimitSection';
import ResultSection from './components/ResultSection';
import TipsSection from './components/TipsSection';

function App() {
	return (
		<div className="flex flex-col items-center">
			<CalculatorSection />
			<ResultSection />
			<TipsSection />
			<LimitSection />
		</div>
	);
}

export default App;
