import '../style/pages/home.css';

import leftNavSection from '../containers/LeftNavSection.jsx';

function Home() {

    return (
        <div className="home_wrapper">
            {/* <section className='leftNavSection_wrapper'>
                <leftNavSection />
            </section> */}
            <div className='section_wrapper'>
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
        </div>
        </div>
    );
}

export default Home