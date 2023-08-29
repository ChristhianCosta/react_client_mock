import { GridC, DadosImagem } from '../components/grid.jsx'
import { Home } from '../components/home.jsx'
import { Nav } from '../components/nav.jsx'
import { Postagem } from '../components/PostGrid/postagem.jsx'


export function Hero(){
    return(
        <div>
            <Nav/>
            <Home/>
            <GridC slides={DadosImagem} /> 
            <Postagem/>
            
        </div>
    )
}