import '../style/components/navIcon.css';

function navIcon({icon}) {

    return(
        <div className='navIcon_wrapper'>
            <img src={ require('../assets/' + icon) } alt="navIcon" className="navIcon" />
        </div>
    );
}

export default navIcon