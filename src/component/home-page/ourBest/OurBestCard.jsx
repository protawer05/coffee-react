import './ourBestCard.css'
const OurBestCard = (props) => {
    const {img, subtitle, price} = props;
    return(
        <div className="card__wrapper">
            <div style={{background: `url(${img})`}} alt="" className="card__img"/>
            <div className="card__subtitle">{subtitle}</div>
            <div className="card__price">{price}</div>
        </div>
    )
}

export default OurBestCard;