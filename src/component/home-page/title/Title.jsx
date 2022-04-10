import './title.css'

const Title = (props) => {
    return(
        <>
        <div className='main-bg'/>
        <div className="title__wrapper">
            <div className="title__title">Everything You Love About Coffee</div>
            <div className="white-beans"></div>
            <div className="title__text">We makes every day full of energy and taste <br/> Want to try our beans?</div>
            <a href="/#" className="title__button">More</a>
        </div>
        </>
        
    )
}

export default Title;