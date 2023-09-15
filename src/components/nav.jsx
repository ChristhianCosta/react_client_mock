import { Navi } from "./navi";
import { useNavigate } from "react-router-dom";


export function Nav(){
    const navigation = useNavigate();

    return(
        <Navi>
           
                    
            <button onClick={() => {
                    navigation(`/`);
                    }} >
                home
            </button>
            
            <button onClick={() => {
                    navigation(`/blogpage`);
                    }} >
                blog
            </button>
            
            <button onClick={() => {
                    navigation(`/create`);
                    }} >
                create
            </button>

            <button onClick={() => {
                    navigation(`/posts`);
                    }} >
                posts
            </button>
            
            <button onClick={() => {
                    navigation(`/login`);
                    }} >
                login
            </button>
    
        </Navi>
    )
}