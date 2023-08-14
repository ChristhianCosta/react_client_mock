import { BlogHeader } from '../components/blogslider/blogheader.jsx'
import { BlogSlider } from '../components/blogslider/blogslider.jsx'
import { Nav } from '../components/nav.jsx'

export function BlogPage(){

    return(
        <div>
            <Nav/>
            <BlogHeader/>
            <BlogSlider/>

        </div>
    )

}