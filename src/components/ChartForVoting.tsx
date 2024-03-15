import { FC } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartForVotingProps {}

const ChartForVoting: FC<ChartForVotingProps> = ({}) => {
  const options = {
    labels: ["Cintara Surya Paloh", "Surya Surya", "Cintara"],

    colors: ["#FF6384", "#FFCD56", "#36A2EB"],

    animations: {
      enabled: true,
      easing: "easeOutExpo",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 500,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
      dataLabels: {
        enabled: false,
      },
      
      sparkline: {
        enabled: true,
      },
    },
   
    legend: {
      show: false,
    },
  };

  const series = [720, 170, 29];

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height={380}
        width={500}
      />
    </>
  );
};

export default ChartForVoting;
