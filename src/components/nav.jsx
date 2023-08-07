import { Navi } from "./navi";
import { useNavigate } from "react-router-dom";


export function Nav(){
    const navigation = useNavigate();

    return(
        <Navi>
            <hr />
                    
            <button onClick={() => {
                    navigation(`/`);
                    }} >
                home
            </button>
            
            <button onClick={() => {
                    navigation(`/blog`);
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
            
            <hr />
    
        </Navi>
    )
}