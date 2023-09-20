import { Routes, Route } from "react-router-dom";
import { Hero } from "../Pages/Hero";
import { Create } from "../Pages/CriarPost";
import { Posts } from "../Pages/Posts";
import { PostId } from "../Pages/SinglePost";
import { BlogPage } from "../Pages/BlogPage";
import { UserLogin } from "../Pages/Login";
import { UserTeste } from "../Pages/FormHook";
import { UserAuth } from "../Pages/Auth";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/post/:id" element={<PostId/>} />
            <Route path="/blogpage" element={<BlogPage/>} />
            <Route path="/login" element={<UserLogin/>} />
            <Route path="/form" element={<UserTeste/>} />
            <Route path="/auth" element={<UserAuth/>} />

        </Routes>
    )
}
