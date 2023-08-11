import axios from "axios"
import { useEffect, useState } from "react"
import { PostWrapper, PostCard, PostData } from "../components/posting"
import { useParams } from "react-router-dom"
import { Nav } from "../components/nav"

import { PostSection, PostInfo, PostContent } from "../components/singlepost/singlepost"



export function PostId(){
    let {id} = useParams();

    const [singlePost, setsinglePost] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:3000/post/buscar/${id}`).then((response)=>{
            setsinglePost(response.data.response)
            console.log(singlePost)
        });
    },[])

    return(

        <>
            {/*<Nav/>
            <h1>Single post</h1>
            <PostWrapper>
                
                    <PostCard>
                        <h2> {singlePost.title} </h2>
                        <PostData>
                            <p>{singlePost.content}</p>
                        </PostData>
                        <PostData>
                            <p>{singlePost.category}, {singlePost.updatedAt}</p>
                        </PostData>
                        <PostData>
                            <p>{singlePost._id}</p>
                        </PostData>
                    </PostCard>
            
                </PostWrapper>*/}

                <PostSection>
                    <PostInfo>
                        <div>
                            <h1>
                                {singlePost.title}
                            </h1>
                            <h2>Subtítulo</h2>
                        </div>
                        <img src="" alt={singlePost.image} />
                        <p>Autor:</p>
                    </PostInfo>
                    <PostContent>
                        <p>
                            {singlePost.content}
                        </p>
                    </PostContent>
                </PostSection>


        </>
        
    )

}