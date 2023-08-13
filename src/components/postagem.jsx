import axios from "axios"
import { useEffect, useState } from "react"
import { PostWrapper, PostCard, PostData, StyledDiv } from "./posting"
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
        
            <StyledDiv>
                <PostWrapper>
                    {listOfPosts.map((value, key)=>{
                        return(
                        <PostCard>
                            <h2 onClick={() => {
                            navigation(`/post/${value._id}`);
                            }} > {value.title} </h2>
                            
                            <PostData>
                                <p>{value.category}</p>
                            </PostData>
                            
                        </PostCard>)
                    })}
                </PostWrapper>
            </StyledDiv>
        
    )

}