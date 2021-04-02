
import Banner from "../../components/Banner";
import About from "../../components/About";
//import Portfolio from "../../components/Portfolio";
import Experience from "../../components/Experience";
//import Blog from "../../components/Blog";
import PageBuilder from "../../components/PageBuilder";
import Data from "../../data.json";

export default function App() {


    let elements = (
        <>
            <Banner data={Data.Banner} />
            <About data={Data.About} />
            {/*<Services data={Data.Services}/>*/}
             {/*<Portfolio data={Data.Portfolio} />*/}
            <Experience data={Data.Experience} />

             {/*<Blog data={Data.Blog} />*/}
        </>
    )

    return (
        <>
            <PageBuilder page={elements} data={Data} />
        </>

    )
};

