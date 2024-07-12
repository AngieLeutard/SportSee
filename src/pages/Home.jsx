import '../style/pages/home.css';
import { useParams } from 'react-router-dom';
import LeftNavSection from '../containers/LeftNavSection.jsx';
import fetchData from '../utils/fetchData.js';

function Home() {

    const { id } = useParams();

    const data = fetchData(`http://localhost:3000/user/${id}`)
    .then(data => {
        console.log('Données récupérées:', data);
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
    });

    return (
        <div className="home_wrapper">
            <section className='left_section_wrapper'>
                <LeftNavSection />
            </section>
            <div className='right_section_wrapper'>
                <section className='welcome_section'>
                    <h1 className='welcome_section_title'>Bonjour <span className='red_word'>Thomas</span></h1>
                    <p className='welcome_section_text'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                </section>
                <section className='chart_section_wrapper'>
                    <div className='chart_wrapper'>
                        <div className='main_chart'></div>
                        <div className='other_chart'></div>
                    </div>
                    <div className='chart_icon_wrapper'>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home