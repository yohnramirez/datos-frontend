import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import VerticalNav from "../Dashboard/VerticalNav/VerticalNav";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  fill: true,
  responsive: true,
};

const Analityc = () => {
  const [dataAnalityc, setDataAnalityc] = useState([]);
  let labels = [null];
  let scores = [null];

  dataAnalityc.map((data: any) => {
    scores.push(data.ubicacion);
  });

  dataAnalityc.map((data: any) => labels.push(data.ubicacion));

  scores = scores.reduce(
    (prev: any, cur: any) => ((prev[cur] = prev[cur] + 1 || 1), prev),
    {}
  );

  labels = labels.filter((item: any, index: number) => {
    return labels.indexOf(item) == index;
  });

  const getData = async () => {
    const res = await axios.get("http://localhost:3000/dashboard");
    setDataAnalityc(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const orderData = useMemo(() => {
    return {
      datasets: [
        {
          label: "Cantidad de arboles en mis lugares registrados",
          data: scores,
          tension: 0.3,
          backgroundColor: "#006BA9",
        },
      ],
      labels,
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <VerticalNav/>
      <Bar data={orderData} options={options} className="ml-56"/>;
    </div>
  );
};

export default Analityc;
