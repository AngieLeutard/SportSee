import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ReferenceDot, ReferenceArea } from "recharts";import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useFetch } from "../utils/fetchData.js";

import CustomToolTip from "./LineChartCustomToolTip.jsx";

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

    const formatLabel = (value) => {
      if (value === 1) return 'L'
      if (value === 2) return 'M'
      if (value === 3) return 'M'
      if (value === 4) return 'J'
      if (value === 5) return 'V'
      if (value === 6) return 'S'
      if (value === 7) return 'D'
      return value
    }
    
    return (
        <LineChart width={240} height={200} data={chartData}>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: '0.75rem'}} tickFormatter={formatLabel} tickMargin={20} />
            <YAxis hide domain={['dataMin-10', 'dataMax+10']}/>
            <Tooltip content={<CustomToolTip />} cursor={false}/>
            <Line type="natural" dataKey="length" stroke="url(#colorUv)" strokeWidth={2} activeDot={{ stroke: '#FFF', strokeWidth: 4, r: 2 }} dot={false} />
            <defs>
              <linearGradient
                id="colorUv"
                x1="0%"
                y1="0"
                x2="100%"
                y2="0"
              >
							<stop
								offset="0%"
								stopColor="rgba(255, 255, 255, 0.3)"
							/>
							<stop
								offset="20%"
								stopColor="rgba(255, 255, 255, 0.4)"
							/>
							<stop
								offset="40%"
								stopColor="rgba(255, 255, 255, 0.5)"
							/>
							<stop
								offset="60%"
								stopColor="rgba(255, 255, 255, 0.6)"
							/>
							<stop
								offset="100%"
								stopColor="rgba(255, 255, 255, 1)"
							/>
						</linearGradient>
					</defs>
        </LineChart>
    );
}

export default AverageChart