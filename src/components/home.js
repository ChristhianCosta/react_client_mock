import styled from "styled-components";

export const HomeContainer = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    margin: 1rem 0;

    >*{
        width: 30%;
    }
`

export const HomeText =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    >:nth-child(odd){
        color: #FFF000;
        font-family: Roboto;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        letter-spacing: 0.25rem;
    }
    >:nth-child(even){
        color: #DDBA37;
        font-family: Roboto;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.25rem;
    }
`

export const HomeImg =styled.div`
    width: auto;

    

    
    > img {
        width: 80%;
        filter: brightness(75%);
        
    }
`

export const HomeButton =styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    > button {
        padding: 0px;
        width: 16.5625rem;
        height: 4.12125rem;
        flex-shrink: 0;
        border-radius: 5px;
        background: #F6EB37;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

        > p{
            background: none;
        }
    }
`