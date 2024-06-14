import '../style/containers/leftNavSection.css';

import navIcon from '../components/NavIcon';

function leftNavSection() {

    return(
        <div className='section_wrapper'>
            <nav className='leftNav'>
                    <a className='nav_link' href="#">
                        <navIcon 
                            picture = "yoga.png"
                        />
                    </a>
                    <a className='nav_link' href='#'>
                        <navIcon 
                            picture = "pool.png"
                        />
                    </a>
                    <a className='nav_link' href="#">
                        <navIcon 
                            picture = "cycling.png"
                        />                    </a>
                    <a className='nav_link' href="#">
                        <navIcon 
                            picture = "workout.png"
                        />
                    </a>
                </nav>
        </div>
    );
}

export default leftNavSection