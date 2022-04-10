import OurBestCard from './OurBestCard';
import './ourBest.css';

const OurBest = (props) => {
    return(
        <>
        <div className='best__wrapper'>
        <div className="best__wrapper-img"></div>
            <div className="best__wrapper-content">
                <h2 className="best__title">Our Best</h2>
                <ul className="best__cards">
                    <OurBestCard img={'../../../img/card1.png'} subtitle={'Solimo Coffee Beans 2 kg'} price={'10.73$'}/>
                    <OurBestCard img={'./card2.png'} subtitle={'Presto Coffee Beans 1 kg'} price={'15.99$'}/>
                    <OurBestCard img={'./card3.png'} subtitle={'AROMISTICO Coffee 1 kg'} price={'6.99$'}/>
                </ul>
            </div>
        </div>
        </>
    )
}

export default OurBest;