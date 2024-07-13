import { RadialBarChart, RadialBar, Legend } from "recharts";
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
                value: userSessions,
            }
        ];
    }
    
    const style = {
        top: 0,
        left: 350,
        lineHeight: "24px",
    };

    return (
        <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={140}
            outerRadius={140}
            barSize={10}
            data={chartData}
        >
            <RadialBar
                minAngle={15}
                label={{ position: "insideStart", fill: "#000" }}
                background= "#FBFBFB"
                clockWise
                dataKey="value"
                cornerRadius={10}
            />
            <Legend
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={style}
            />
        </RadialBarChart>
    );
}

export default ScoreChart