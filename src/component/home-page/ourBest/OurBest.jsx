import OurBestCard from './OurBestCard';
import card1 from '../../../img/card1.png'
import card2 from '../../../img/card2.png'
import card3 from '../../../img/card3.png'

import './ourBest.css';


const OurBest = (props) => {
    return(
        <>
        <div className='best__wrapper'>
        <div className="best__wrapper-img"></div>
            <div className="best__wrapper-content">
                <h2 className="best__title">Our Best</h2>
                <ul className="best__cards">
                    <OurBestCard img={card1} subtitle={'Solimo Coffee Beans 2 kg'} price={'10.73$'}/>
                    <OurBestCard img={card2} subtitle={'Presto Coffee Beans 1 kg'} price={'15.99$'}/>
                    <OurBestCard img={card3} subtitle={'AROMISTICO Coffee 1 kg'} price={'6.99$'}/>
                </ul>
            </div>
        </div>
        </>
    )
}

export default OurBest;