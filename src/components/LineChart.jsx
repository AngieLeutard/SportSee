import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ReferenceDot, ReferenceArea } from "recharts";import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useFetch } from "../utils/fetchData.js";

function AverageChart() {

    const { id } = useParams();

    const [url, setUrl] = useState(`http://localhost:3000/user/${id}/average-sessions`);
    const { data, isPending, error } = useFetch(url);

    let userData = "";
    let userSessions = [];
    let chartData = [];

    if(data) {
        console.log(data)
        userData = data.data;
        userSessions = userData.sessions;
        console.log(userSessions)
        chartData = [
            {
              name: "L",
              length: userSessions[0].sessionLength,
            },
            {
              name: "M",
              length: userSessions[1].sessionLength,
            },
            {
              name: "M",
              length: userSessions[2].sessionLength,
            },
            {
              name: "J",
              length: userSessions[3].sessionLength,
            },
            {
              name: "V",
              length: userSessions[4].sessionLength,
            },
            {
              name: "S",
              length: userSessions[5].sessionLength,
            },
            {
              name: "D",
              length: userSessions[6].sessionLength,
            },
          ];
    }
    
    return (
        <LineChart width={258} height={263} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="length" stroke="#FF0101" activeDot={{ r: 8 }} />
            <ReferenceLine y={100} label="100" ifOverflow="extendDomain" />
        </LineChart>
    );
}

export default AverageChart