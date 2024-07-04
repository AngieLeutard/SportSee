import '../style/containers/leftNavSection.css';

import NavIcon from '../components/NavIcon';

function LeftNavSection() {

    return(
        <div className='section_wrapper'>
            <nav className='leftNav'>
                <a className='nav_link' href="/">
                    <NavIcon 
                        icon="yoga.png"
                    />
                </a>
                <a className='nav_link' href='/'>
                    <NavIcon 
                        icon="pool.png"
                    />
                </a>
                <a className='nav_link' href="/">
                    <NavIcon 
                        icon="cycling.png"
                    />                    </a>
                <a className='nav_link' href="/">
                    <NavIcon 
                        icon="workout.png"
                    />
                </a>
            </nav>
        </div>
    );
}

export default LeftNavSection