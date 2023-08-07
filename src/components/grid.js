import styled from "styled-components";


export const Servicecontainer = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;


    margin: 1rem 0;
`
export const ServiceText =styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    z-index: 3;
    > *{
        background: none;
    }
    
    ::after{
       
        background-image: linear-gradient(to right, #fff0, #000 75%), url("/bgtexto.png");

        content: "";
        position: absolute;
        width: 100%;
        height: 200%;
        top: -50%;
        left: -25%;
        z-index: -1;
    }


    > h1{
        color: #F6EB37;
        text-align: center;
        font-family: Roboto;
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.225rem;
        padding-bottom: 1.5rem;
    }
    > p {
        color: #DDBA37;
        text-align: center;
        font-family: Roboto;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;      
        padding-bottom: 1.5rem;  
    }
    > button{
        border-radius: 0.3125rem;
        background: #F6EB37;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
`

export const ServiceGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 200px 200px;
    gap: 1rem;
`
export const SlideImage = styled.img`
    width: 90%;
    /*height: 80%;*/
    object-fit: fill;

    border-radius: 12px;


`