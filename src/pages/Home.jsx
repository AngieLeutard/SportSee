import '../style/pages/home.css';

import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useFetch } from "../utils/fetchData.js";

import LeftNavSection from '../containers/LeftNavSection.jsx';
import Card from '../components/Card.jsx';
import ActivityChart from '../components/BarChart.jsx';
import AverageChart from '../components/LineChart.jsx';
import RadarChart from '../components/RadarChart.jsx';
import RadialBarChart from '../components/RadialBarChart.jsx'

function Home() {

    const { id } = useParams();

    const [url, setUrl] = useState(`http://localhost:3000/user/${id}`);
    const { data, isPending, error } = useFetch(url);

    let userData = "";
    let userInfos = "";
    let userValues = "";

    if(data) {
        userData = data.data;
        userInfos = userData.userInfos;
        userValues = userData.keyData;
    }
    
    return (
        <div className="home_wrapper">
            <section className='left_section_wrapper'>
                <LeftNavSection />
            </section>
            <div className='right_section_wrapper'>
                <section className='welcome_section'>
                    <h1 className='welcome_section_title'>Bonjour <span className='red_word'>{ userInfos.firstName }</span></h1>
                    <p className='welcome_section_text'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                </section>
                <section className='chart_section_wrapper'>
                    <div className='chart_wrapper'>
                        <div className='main_chart'>
                            <p className="chartTitle">Activité quotidienne</p>
                            <ActivityChart />
                        </div>
                        <div className='other_chart'>
                            <AverageChart />
                            <RadarChart />
                            <RadialBarChart />
                        </div>
                    </div>
                    <div className='chart_icon_wrapper'>
                        <Card 
                            icon="calories-icon.png"
                            value={ userValues.calorieCount }
                            type="Calories"
                        />
                        <Card 
                            icon="protein-icon.png"
                            value={ userValues.proteinCount }
                            type="Protéines"
                        />
                        <Card 
                            icon="carbs-icon.png"
                            value={ userValues.carbohydrateCount }
                            type="Glucides"
                        />
                        <Card 
                            icon="fat-icon.png"
                            value={ userValues.lipidCount }
                            type="Lipides"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home