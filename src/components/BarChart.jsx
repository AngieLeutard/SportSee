import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useFetch } from "../utils/fetchData.js";

import BarChartCustomToolType from "./BarChartCustomToolTip.jsx";
import barChartModel from "../data/barChartData.js";

function ActivityChart() {

    const { id } = useParams();

    const [url, setUrl] = useState(`http://localhost:3000/user/${id}/activity`);
    const { data, isPending, error } = useFetch(url);

    let chartData = [];

    if(data) {
      chartData = new barChartModel(data.data.sessions).sessions;
    }
    
    return (
        <BarChart width={763} height={273} data={chartData} barSize={7} barGap={8}>
            <CartesianGrid strokeDasharray="3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: '#9B9EAC' }} tickLine={false} stroke="#DEDEDE" strokeWidth={2} tickMargin={16}/>
            <YAxis orientation="right" tickMargin={30} tick={{ fill: '#9B9EAC' }} tickLine={false} axisLine={false} tickCount={3}/>
            <Tooltip content={<BarChartCustomToolType />} cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }} />
            <Legend verticalAlign="top" align="right" iconType="circle" iconSize="10" height={80}/>
            <Bar dataKey="poids" fill="#282D30" radius={[20, 20, 0, 0]} maxBarSize={10}/>
            <Bar className="bar" dataKey="calories" fill="#E60000" radius={[20, 20, 0, 0]} maxBarSize={10}/>
        </BarChart>
    );
}

export default ActivityChart