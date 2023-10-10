import { Navi } from "./navi";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../api/axios";


export function Nav(){
    const navigation = useNavigate();

    const logout = async () => {
        try {
            await axiosPrivate.post('/user/logout').then((res)=>{
                console.log(res)
            })
            
        } catch (error) {
            console.log(error)
        }
    }

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
                    navigation(`/auth`);
                    }} >
                auth
            </button>
            
            <button onClick={() => {
                    navigation(`/form`);
                    }} >
                login
            </button>

            <button onClick={() => logout()}>
                logout
            </button>
    
        </Navi>
    )
}