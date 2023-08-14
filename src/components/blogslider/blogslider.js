import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const BlogMain = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const BlogAside = styled.div`
    width: 20%;
    height: 70vh;
    background-color: #000;
`

export const BlogCarousel = styled.div`
    width: 80%;
    height: 100vh;
    //background-color: beige;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
   

`
export const Roleta = styled.div`
    //background-color: blanchedalmond;
    padding: 5px;

    display: flex;
    justify-content: center;

    >div{
        //display: flex;
        //align-items: center;
        //justify-content: center;
        width: 800px;
    }
    
`

export const BlogCard = styled.div`
    background-color: #a9a9a9;
    width: 200px;

    
    >h4{
        font-weight: 700;
        font-family: monospace;
        font-size: 1.5rem;
        margin: 0;
    }

    >p{
        text-align: left;
    }
    
   
`

export const PostData = styled.div`
    background-color: none;
    color: black;

    >p{
        text-align: left;
        color: black;
        margin: 0px;
    }
`

export const BlogRecent = styled.div`
    width: auto;
    
    
`

