import { Routes, Route } from "react-router-dom";
import { Hero } from "../Pages/Hero";
import { Create } from "../Pages/CriarPost";
import { Posts } from "../Pages/Posts";
import { PostId } from "../Pages/SinglePost";
import { BlogPage } from "../Pages/BlogPage";
import { UserLogin } from "../Pages/Login";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/post/:id" element={<PostId/>} />
            <Route path="/blogpage" element={<BlogPage/>} />
            <Route path="/login" element={<UserLogin/>} />

        </Routes>
    )
}
