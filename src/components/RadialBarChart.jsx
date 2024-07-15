import { PieChart, Pie, Sector, Cell, Label } from "recharts";

import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useFetch } from "../utils/fetchData.js";

function ScoreChart() {

    const { id } = useParams();

    const [url, setUrl] = useState(`http://localhost:3000/user/${id}`);
    const { data, isPending, error } = useFetch(url);

    let userData = "";
    let userSessions = [];
    let chartData = "";

    if(data) {
        console.log(data)
        userData = data.data;
        userSessions = userData.score;
        console.log(userSessions)
        chartData = [
            {
                name: "Score",
                value: 100-(userSessions*100),
                fill: "#FFF"
            },
            {
                name: "Score",
                value: userSessions*100,
                fill: "#FF0000"
            }
        ];
    }

    return (
        <PieChart width={200} height={200} > 
            <text x={400} y={200} textAnchor="middle" dominantBaseline="middle">
                Donut
            </text>
            <Pie
                data={chartData}
                cx={100}
                cy={100}
                innerRadius={70}
                outerRadius={80}
                fill="#FFF"
                paddingAngle={5}
                dataKey="value"
                cornerRadius={100}
            >
                <Label value="de votre objectif" position="center" />
            </Pie>
        </PieChart>
    );
}

export default ScoreChart