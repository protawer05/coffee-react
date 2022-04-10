import Footer from '../Footer'
import Header from '../Header'
import Title from './title/Title'
import AboutUs from './aboutUs/AboutUs'
import OurBest from './ourBest/OurBest'
import styled from 'styled-components'

// 800px
const HomePage = ({changePage}) => {
    const Wrapper = styled.div`
    margin: 0 auto;
    width: 800px;
    `
    return(
        <>
        <Wrapper>
            <Header changePage={changePage}/>
            <Title/>
            <AboutUs/>
        </Wrapper>
        <OurBest/>
        <Wrapper>
            <Footer/>
        </Wrapper>
        </>
    )
}

export default HomePage;