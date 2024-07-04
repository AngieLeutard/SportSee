import '../style/components/navIcon.css';

function NavIcon({icon}) {

    return(
        <div className='navIcon_wrapper'>
            <img src={ require('../assets/' + icon) } alt="navIcon" className="navIcon" />
        </div>
    );
}

export default NavIcon