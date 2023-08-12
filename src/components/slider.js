import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

    flex-direction: column;
    background-color: black;

`

export const Setas = styled.div`
    height: 3rem;
   
    display: flex;
    justify-content: center;
    
 
    margin-top: 0.5rem;

    > button{
        
        background-size: contain;
        background-repeat: no-repeat;
        background-color: transparent;
        background-position: center;
        height: 100%;
        width: 10%;
        max-width: 80px;
        
        
    }
    > button:first-child{
        background-image: url('/setaDireita.png');
        transform: rotate(180deg);
    }
    > button:nth-child(2){
        background-image: url('/setaDireita.png');
    }
`

export const SliderWrapper = styled.section`


    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    //visualizar
    //background-color: aqua;
    width: 100vw;
    height: 70vh;
    border-radius: 12px;
    overflow: hidden;
    
   
`
export const SliderInternal = styled.section`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

    overflow: hidden;

    width: 100%;

`
export const Slot = styled.div`

   
    padding: 10px;
    width: 400px;
    height: 60vh;
    max-height: 500px;
    border-radius: 16px;
    flex: none;



    overflow: hidden;
`

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 12px;

    overflow: hidden;
`