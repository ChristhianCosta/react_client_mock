import { Routes, Route } from "react-router-dom";
import { Hero } from "../Pages/Hero";
import { Blog } from "../Pages/Blog";
import { Create } from "../Pages/CriarPost";
import { Posts } from "../Pages/Posts";
import { PostId } from "../Pages/SinglePost";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/post/:id" element={<PostId/>} />

        </Routes>
    )
}
