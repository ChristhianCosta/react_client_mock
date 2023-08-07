import axios from "axios"
import { useEffect, useState } from "react"
import { PostWrapper, PostCard, PostData } from "./posting"
import { useNavigate } from "react-router-dom"


export function Postagem(){
    const navigation = useNavigate();

    const [listOfPosts, setListOfPosts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/post/todos").then((response)=>{
            setListOfPosts(response.data)
        });
    },[])

    return(
        <PostWrapper>
            {listOfPosts.map((value, key)=>{
                return(
                <PostCard>
                    <h2 onClick={() => {
                    navigation(`/post/${value._id}`);
                    }} > {value.title} </h2>
                    <PostData>
                        <p>{value.content}</p>
                    </PostData>
                    <PostData>
                        <p>{value.category}, {value.updatedAt}</p>
                    </PostData>
                    <PostData>
                        <p>{value._id}</p>
                    </PostData>
                </PostCard>)
            })}
        </PostWrapper>
    )

}