import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useFetch } from "../utils/fetchData.js";

function PerfChart() {

    const { id } = useParams();

    const [url, setUrl] = useState(`http://localhost:3000/user/${id}/performance`);
    const { data, isPending, error } = useFetch(url);

    let userData = "";
    let userSessions = [];
    let chartData = [];

    if(data) {
        console.log(data)
        userData = data.data;
        userSessions = userData.data;
        console.log(userSessions)
        chartData = [
            {
              name: "Intensité",
              value: userSessions[5].value,
            },
            {
              name: "Vitesse",
              value: userSessions[4].value,
            },
            {
              name: "Force",
              value: userSessions[3].value,
            },
            {
              name: "Endurance",
              value: userSessions[2].value,
            },
            {
              name: "Energie",
              value: userSessions[1].value,
            },
            {
              name: "Cardio",
              value: userSessions[0].value,
            },
          ];
    }
    
    return (
        <RadarChart
            outerRadius={90}
            data={chartData}
            width={248}
            height={263}
        >
            <PolarGrid radialLines={false}/>
            <PolarAngleAxis dataKey="name" fontFamily="Roboto" verticalAnchor="middle" tick={{ fill: "white", fontSize: 11 }}/>
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