import '../style/pages/home.css';

import { useParams } from 'react-router-dom';

import LeftNavSection from '../containers/LeftNavSection.jsx';
import fetchData from '../utils/fetchData.js';
import Card from '../components/Card.jsx';

function Home() {

    const { id } = useParams();

    let data2 = fetchData(`http://localhost:3000/user/${id}`)

    .then(data => {
        console.log(data.data);
        const userData = data.data;
        console.log(userData);
        const userInfos = userData.userInfos;
        console.log(userInfos)
        console.log(userInfos.firstName)
        const userValues = userData.keyData;
        console.log(userValues.calorieCount)
        return data2
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    });

    console.log(data2)
    
    return (
        <div className="home_wrapper">
            <section className='left_section_wrapper'>
                <LeftNavSection />
            </section>
            <div className='right_section_wrapper'>
                <section className='welcome_section'>
                    <h1 className='welcome_section_title'>Bonjour <span className='red_word'>Prénom</span></h1>
                    <p className='welcome_section_text'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                </section>
                <section className='chart_section_wrapper'>
                    <div className='chart_wrapper'>
                        <div className='main_chart'></div>
                        <div className='other_chart'></div>
                    </div>
                    <div className='chart_icon_wrapper'>
                        <Card 
                            icon="calories-icon.png"
                            value="290g"
                            type="Calories"
                        />
                        <Card 
                            icon="protein-icon.png"
                            value="290g"
                            type="Protéines"
                        />
                        <Card 
                            icon="carbs-icon.png"
                            value="290g"
                            type="Glucides"
                        />
                        <Card 
                            icon="fat-icon.png"
                            value="290g"
                            type="Lipides"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home