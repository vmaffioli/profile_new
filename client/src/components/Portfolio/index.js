import { HashLink as Link } from 'react-router-hash-link';


export default function Portfolio(props) {

    return (
        <>
            <div className="portfolio" id="portfolio">
                <div className="container">
                    <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <br /><br />

                        <p>{props.data.text001}</p>
                        <h2>{props.data.title001}</h2>
                    </div>
                    {/*<div className="row">
                        <div className="col-12">
                            <ul id="portfolio-filter">
                                <li data-filter="*" className="filter-active">{props.data.text002}</li>
                                <li data-filter=".filter-1">{props.data.text003}</li>
                                <li data-filter=".filter-2">{props.data.text004}</li>
                                <li data-filter=".filter-3">{props.data.text005}</li>
                        </ul>
                        </div>
                    </div>*/}
                    <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item" >
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src={props.data.img005} alt="answer" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>{props.data.title005}</h3>
                                    <a href={props.data.url005} className='btn'>
                                        +
                                    </a>                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item" >
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src={props.data.img003} alt="carnn" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>{props.data.title003}</h3>
                                    <a href={props.data.url003} className='btn'>
                                        +
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item" >
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src={props.data.img004} alt="pikachu" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>{props.data.title004}</h3>
                                    <a href={props.data.url004} className='btn'>
                                        +
                                    </a>                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item" >
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src={props.data.img002} alt="isa" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>{props.data.title002}</h3>
                                    <Link to={props.data.url002} className='btn'>
                                        +
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};