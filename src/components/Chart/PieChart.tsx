import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import pieChartData from "./PieChartData.json";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const labels = pieChartData.map((item) => item.title);
  const dataValues = pieChartData.map((item) => item.value);
  const backgroundColors = pieChartData.map((item) => item.color);
  const borderColors = pieChartData.map((item) => item.color);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Status",
        data: dataValues,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
