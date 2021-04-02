import Header from "../Header";
import Footer from "../Footer";
import Loader from "../Loader";
import Scripts from "../Scripts";


export default function PageBuilder(props) {

    return (
        <>
        
            <Header data={props.data.Header}/>

            {props.page}

            <Footer data={props.data.Footer}/>
            <Loader />
            <Scripts />
           
        </>

    )
};

