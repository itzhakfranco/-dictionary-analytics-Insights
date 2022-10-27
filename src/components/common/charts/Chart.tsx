import { Bar } from "react-chartjs-2";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
interface Props {
	dataset: any;
}
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
function Chart({ dataset }: Props) {
	const options = {
		responsive: true,
	};

	return (
		<div>
			<Bar style={{ width: "1000px" }} data={dataset} options={options} />
		</div>
	);
}

export default Chart;
