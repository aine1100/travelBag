import Navbar from "../component/navbar/navbar";
import Animation from "../component/animation/animation";
import Aboutus from "../component/aboutus/about";
import Destination from "../component/destination/destination";
import Gallery from "../component/gallery/gallery";
import Hotel from "../component/hotels/hotel";
import Clients from "../component/client/client";
import Blog from "../component/blog/blog";
import Footer from "../component/footer/footer";
export default function Home(){
    return(
        <div style={{overflowX:"hidden"}}>
            <Navbar/>
            <Animation/>
            <Aboutus/>
            <Destination/>
            <Gallery/>
            <Hotel/>
            <Clients/>
            <Blog/>
            <Footer/>
        </div>
    )
}