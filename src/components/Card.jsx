import '../style/components/card.css';

function Card({icon, value, type}) {

    return(
        <div className='card_wrapper'>
            <img src={ require('../assets/icon/' + icon) } alt="cardIcon" className="cardIcon" />
            <div className='cardText_wrapper'>
                <span className='card_value'>{ value }g</span>
                <span className='card_type'>{ type }</span>
            </div>
        </div>
    );
}

export default Card