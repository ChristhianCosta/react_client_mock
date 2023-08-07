import { HomeContainer, HomeText, HomeImg, HomeButton } from "./home";
import { useNavigate } from "react-router-dom";

export const Home = ()=>{
    const navigation  = useNavigate()

    return(
        
        <HomeContainer>
            <HomeText>
                <p>INVESTINDO</p>
                <p>no presente, </p>
                <p>ECONOMIZANDO</p> 
                <p>no futuro.</p>
            </HomeText>

            <HomeImg>
                <img src="/lamp.png" alt="" />
            </HomeImg>

            <HomeButton>
                <button  >
                    <p>CADASTRE-SE</p>
                </button>
            </HomeButton>

        </HomeContainer>
    )
    
}