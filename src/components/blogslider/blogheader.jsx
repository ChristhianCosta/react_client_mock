import styled from "styled-components";

const Navi = styled.nav`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #857F7F;
`

const NavItem = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    >p{
        color: rgba(255, 255, 255, 0.80);
        text-align: center;
        font-family: Palatino Linotype;
        font-size: 1rem;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.2rem;
    }

    >h1{
        color: white;
        margin: 0px;
    }
`
export function BlogHeader(){
    return(
        <Navi style={{height:"13.375rem"}}>
            <NavItem>
                <p>'Fique sempre de olho na previsão do tempo,<br/> tempestades vem contantemente!'</p>
            </NavItem>

            <NavItem>
                <p>Bem vindo ao</p>
                
                <h1>BLOG E3J</h1>
            </NavItem>

            <NavItem>
                <form action="">
                    <input type="text" />
                </form>
            </NavItem>
        </Navi>
    )
}