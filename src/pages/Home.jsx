import '../style/pages/home.css';

import LeftNavSection from '../containers/LeftNavSection.jsx';

function Home() {

    return (
        <div className="home_wrapper">
            <section className='leftNavSection_wrapper'>
                <LeftNavSection />
            </section>
            {/* <section className='left_section_wrapper'>
                <nav className='leftNav'>
                    <a className='nav_link' href="#">
                        <img src={ require('../assets/yoga.png') } alt="navIcon" className="navIcon" />
                    </a>
                    <a className='nav_link' href='#'>
                        <img src={ require('../assets/pool.png') } alt="navIcon" className="navIcon" />
                    </a>
                    <a className='nav_link' href="#">
                        <img src={ require('../assets/cycling.png') } alt="navIcon" className="navIcon" />
                    </a>
                    <a className='nav_link' href="#">
                        <img src={ require('../assets/workout.png') } alt="navIcon" className="navIcon" />
                    </a>
                </nav>
            </section> */}
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