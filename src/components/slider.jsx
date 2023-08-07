import styled from "styled-components"
import { useState, useRef } from "react"
import { Container, SliderWrapper, Setas, SlideImage, SliderInternal, Slot } from "./slider"

export const DadosImagem = [
    {
        image:'./public/01.png',
        alt:"Sistema Fotovoltaico",
    },
    {
        image:"./public/02.png",
        alt:"EleTrônica e Automação",
    },
    {
        image:"./public/03.png",
        alt:"Instalações Elétricas",
    },
    {
        image:"./public/04.png",
        alt:"Telecomunicação",
    },
    {
        image:"./public/05.png",
        alt:"Eficiência Energética",
    },
    {
        image:"./public/06.png",
        alt:"Cursos e Treinamentos",
    },
];

export const SliderC = ({slides})=>{
    
    const length = slides.length;
    const sliderin = useRef(null);
    
    

    const nextSlide = () => {
        if(sliderin.current.clientWidth < 600){
            sliderin.current.scrollLeft += sliderin.current.clientWidth //sliderin.current.offsetWidth
        }else{
            sliderin.current.scrollLeft += 600 //sliderin.current.offsetWidth
        }

    };

    const prevSlide = () => {
        if(sliderin.current.clientWidth < 600){
            sliderin.current.scrollLeft -= sliderin.current.clientWidth //sliderin.current.offsetWidth
        }else{
            sliderin.current.scrollLeft -= 600 //sliderin.current.offsetWidth
        }  
    };

    return (
    <Container>
        <SliderWrapper>

            <SliderInternal ref={sliderin}>
                
                {
                    slides.map((slide,index)=>{
                        return(
                            <Slot>
                                <SlideImage key={index} src={slide.image} alt={slide.alt} className={slide.alt}/>
                            </Slot>
                        )
                    })
                }                
            </SliderInternal>


           
        </SliderWrapper>
        
        <Setas>
        <button onClick={prevSlide}>

        </button>
        <button onClick={nextSlide}>

        </button>
        </Setas>
    </Container>
    )
}