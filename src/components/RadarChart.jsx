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
              name: "Cardio",
              value: userSessions[0].value,
            },
            {
              name: "Energie",
              value: userSessions[1].value,
            },
            {
              name: "Endurance",
              value: userSessions[2].value,
            },
            {
              name: "Force",
              value: userSessions[3].value,
            },
            {
              name: "Vitesse",
              value: userSessions[4].value,
            },
            {
              name: "Intensité",
              value: userSessions[5].value,
            },
          ];
    }
    
    return (
        <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={chartData}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
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