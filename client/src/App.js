import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import HelmetContainer from "./components/HelmetContainer";
import Data from "./data.json";


export default function App() {

    return (
        <>
            <Header data={Data.Header}/>
            <Banner data={Data.Banner}/>

            {/* 
            <About data={Data.About}/>
            <Services data={Data.Services}/>
            <Portfolio data={Data.Portfolio}/>
            <Experience data={Data.Experience}/>
            <Blog data={Data.Blog}/>
            <Footer data={Data.Footer}/>
            <HelmetContainer />
            <Loader />
            */}
        </>

    )
};

