import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useFetch } from "../utils/fetchData.js";

import radarChartModel from "../data/radarChartData.js";

function PerfChart() {

    const { id } = useParams();

    const [url, setUrl] = useState(`http://localhost:3000/user/${id}/performance`);
    const { data, isPending, error } = useFetch(url);

    
    let chartData = [];

    if(data) {
      console.log(data)
      chartData = new radarChartModel(data.data.data).sessions;
    }

    const formatLabel = (value) => {
      if (value === 1) return 'Intensité'
      if (value === 2) return 'Vitesse'
      if (value === 3) return 'Force'
      if (value === 4) return 'Endurance'
      if (value === 5) return 'Energie'
      if (value === 6) return 'Cardio'
      return value
    }
    
    return (
        <RadarChart
            outerRadius={90}
            data={chartData}
            width={248}
            height={263}
        >
            <PolarGrid radialLines={false}/>
            <PolarAngleAxis dataKey="name" tickFormatter={formatLabel} fontFamily="Roboto" verticalAnchor="middle" tick={{ fill: "white", fontSize: 11 }}/>
            <PolarRadiusAxis tickCount={6} tick={false} axisLine={false}/>
            <Radar
                name="Mike"
                dataKey="value"
                stroke="#FF0101"
                fill="#FF0101"
                fillOpacity={0.6}
            />
        </RadarChart>
    );
}

export default PerfChart