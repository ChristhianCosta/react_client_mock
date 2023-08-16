import styled from "styled-components";

export const SingleContainer = styled.section`
    width: 100vw;
    min-height: 100vh;
`

export const PostSection = styled.section`
    width: 100vw;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    align-items: center;
`

export const PostInfo = styled.div`
    width: 90%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-around;

    h1{
        color: #000;
        font-family: Palatino Linotype;
        font-size: 4.84875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: 0.07275rem;
        text-transform: uppercase;
    }
    h2{
        color: #616161;
        font-family: Palatino Linotype;
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: 125.5%;
        font-variant: small-caps;
        letter-spacing: 0.03375rem;
    }

    img{
        //width: 100%;
        //height: 100%;
        background-color: #616161;
        object-fit: cover;
    }
`

export const PostContent = styled.div`
    width: 80%;
    display: flex;
    justify-items: left;

    p{
        color: #000;
        text-align: justify;
        font-family: Roboto;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: 142%; /* 1.775rem */
    }
    
`