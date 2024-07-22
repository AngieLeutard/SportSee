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
    let userValue = [];
    let numb = 0;
    let str = "";

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
        userValue = chartData[1];
        numb = userValue.value;
        str = numb.toString();
        console.log(str)
    }

    return (
        <>
            <span className="chartLabel">{ str }%</span>
            <span className="chartText">de votre objectif</span>
            <PieChart width={200} height={200}> 
                <Pie
                    data={chartData}
                    cx={100}
                    cy={100}
                    innerRadius={70}
                    outerRadius={80}
                    fill="#FFFFF"
                    paddingAngle={5}
                    dataKey="value"
                    cornerRadius={100}
                >
                </Pie>
            </PieChart>
        </>
       
    );
}

export default ScoreChart