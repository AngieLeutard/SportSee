import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useFetch } from "../utils/fetchData.js";

function ActivityChart() {

    const { id } = useParams();

    const [url, setUrl] = useState(`http://localhost:3000/user/${id}/activity`);
    const { data, isPending, error } = useFetch(url);

    let userData = "";
    let userSessions = [];

    if(data) {
        console.log(data)
        userData = data.data;
        userSessions = userData.sessions;
        console.log(userSessions)
    }

    const chartdata = [
        {
          name: "1",
          poids: userSessions[0].kilogram,
          calories: userSessions[0].calories,
        },
        {
          name: "2",
          poids: userSessions[1].kilogram,
          calories: userSessions[1].calories,
        },
        {
          name: "3",
          poids: userSessions[2].kilogram,
          calories: userSessions[2].calories,
        },
        {
          name: "4",
          poids: userSessions[3].kilogram,
          calories: userSessions[3].calories,
        },
        {
          name: "5",
          poids: userSessions[4].kilogram,
          calories: userSessions[4].calories,
        },
        {
          name: "6",
          poids: userSessions[5].kilogram,
          calories: userSessions[5].calories,
        },
        {
          name: "7",
          poids: userSessions[6].kilogram,
          calories: userSessions[6].calories,
        },
      ];
    
    return (
        <BarChart
            width={835}
            height={320}
            data={chartdata}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip shared={false} trigger="click" />
            <Legend />
            <Bar dataKey="poids" fill="#282D30" />
            <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
    );
}

export default ActivityChart