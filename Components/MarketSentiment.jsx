import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);
const data = {
  //   labels: ["Red", "Green"],
  datasets: [
    {
      data: [200, 100],
      backgroundColor: ["#ee9220ff", "#474c53ff"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB"],
    },
  ],
};

const options = {
  cutout: "70%",
};

export default ({ sentiment }) => (
  <>
    <div className='relative bottom-1'>
      <Doughnut data={data} width={200} height={200} options={options} />
    </div>
    <p className='relative bottom-5 font-extrabold text-xl self-center mx-auto'>
      {sentiment}
    </p>
  </>
);
