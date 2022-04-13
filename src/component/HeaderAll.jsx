import styled from 'styled-components';

const HeaderAll = (props) => {
    const {img, text} = props;
    const Wrapper = styled.div`
        margin: 0 auto;
        width: 100%;
        text-align: center;
        h1 {
            margin-top: 7%;
            font-family: 'Merienda';
            font-weight: 700;
            font-size: 40px;
            line-height: 58px;
            color: #fff;
        }
    `
    const WrapperImg = styled.div`
        background: url(${img});
        background-size: cover;
        width: 100%;
        height: 350px;
        z-index: -10;
        background-position: center;
        position: absolute;
        left: 0;
        top: 0;
    `
    return(
        <Wrapper>
            <WrapperImg/>
            <h1>{text}</h1>
        </Wrapper>
    )
}

export default HeaderAll;