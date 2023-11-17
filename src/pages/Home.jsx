import React  from "react";
// import { useContext } from "react";
import { Navbarr } from "../components/Navbar";
import img1 from "../images/citaphil1.jpg"
import { Link,useLocation } from "react-router-dom"
import { Search } from "../components/Search";
import Pagination from "../components/Pagination";
import { Stories } from "../components/Stories";
// import ReactImageMagnify from "react-image-magnify";
// import { AppContext } from "../components/ConText";
// import { useGlobalContext } from "../components/ConText";

function Home(){
    // const data = useContext(AppContext)
    // const name = useGlobalContext()
    const emailvalue = useLocation()
    console.log(emailvalue)
    return(
        <>
        {/* <h4>Welcome {emailvalue.state.name} to Home page....</h4> */}
        <Navbarr/>
        {/* <div style={{width: "400px", height: "500px"}}>
        <ReactImageMagnify {...{
    smallImage: {
        alt: 'Citaphil',
        isFluidWidth: true,
        src: img1,
        imageClassName: "citaphilImg"
        
    },
    largeImage: {
        src: img1,
        width: 1200,
        height: 1800
    },
    enlargedImagePosition: 'right',
    lensStyle: {backgroundColor: 'rgba(0,0,0,0.6)'}
}} />

        </div> */}
        {/* <img className="citaphil" src={img1} alt="" /> */}
        {/* <h1> Hey, This is home Page....</h1> */}
        {/* <h2>My name is {name}</h2> */}
        {/* <Link to="/">Back</Link> */}
        <Search/>
        <Pagination/>
        <Stories/>
        </>
    )
}

export { Home }