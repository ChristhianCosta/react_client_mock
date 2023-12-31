import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Nav } from "../components/nav"
import { BlogHeader } from "../components/blogslider/blogheader"
import ReactQuill from "react-quill"

import { PostSection, PostInfo, PostContent, SingleContainer } from "../components/singlepost/singlepost"



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

        <SingleContainer>
                <BlogHeader/>
                <Nav/>
                <PostSection>
                    <PostInfo>
                        <div>
                            <h1>
                                {singlePost.title}
                            </h1>
                            <h2>Subtítulo</h2>
                        </div>
                        
                    </PostInfo>
                    <PostInfo>
                        <img src={'http://localhost:3000/' + singlePost.image} alt={'http://localhost:3000/' + singlePost.image} />
                        
                    </PostInfo>
                    <PostInfo>
                        <p>Autor:</p>
                    </PostInfo>
                    <PostContent>
                        <ReactQuill
                            value={singlePost.content}
                            readOnly={true}
                            theme={"bubble"}
                            />
                    </PostContent>
                </PostSection>


        </SingleContainer>
        
    )

}