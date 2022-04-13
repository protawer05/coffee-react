import styled from 'styled-components';

import Header from '../Header';
import HeaderAll from '../HeaderAll';
import AboutOur from '../aboutOur/AboutOur';
import Footer from '../Footer';

import CoffeImg from '../../img/coffeHouseImg.png';
import Bg from '../../img/all-bg.jpg';
const CoffeHouse = ({changePage}) => {
    const Wrapper = styled.div`
        margin: 0 auto;
        width: 800px
    `
    const FlexContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    return (
        <>
            <Header changePage={changePage}/>
            <HeaderAll img={Bg} text={'Our Coffee'}/>
            <Wrapper>
                <AboutOur title={"About our beans   "} img={CoffeImg}/>
                <FlexContainer>

                </FlexContainer>
                <Footer/>   
            </Wrapper>
        </>
    )
}

export default CoffeHouse;