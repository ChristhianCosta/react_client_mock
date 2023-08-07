import { ServiceGrid, ServiceText, Servicecontainer, SlideImage } from "./grid"

export const DadosImagem = [
    {
        image:'/01.png',
        alt:"Sistema Fotovoltaico",
    },
    {
        image:"/02.png",
        alt:"EleTrônica e Automação",
    },
    {
        image:"/03.png",
        alt:"Instalações Elétricas",
    },
    {
        image:"/04.png",
        alt:"Telecomunicação",
    },
    {
        image:"/05.png",
        alt:"Eficiência Energética",
    },
    {
        image:"/06.png",
        alt:"Cursos e Treinamentos",
    },
];

export const GridC = ({slides})=>{

    return (
        <Servicecontainer>
            <ServiceText>
                <h1>NOSSOS <br /> SERVIÇOS</h1>        
                <p>As melhores soluções para o seu negócio</p>
                <button>SAIBA MAIS</button>
            </ServiceText>

            <ServiceGrid>
                {
                    slides.map((slide,index)=>{
                        return(
                            
                            <SlideImage key={index} src={slide.image} alt={slide.alt} />

                        )
                    })
                }
            </ServiceGrid>
        
        </Servicecontainer>
    )
}