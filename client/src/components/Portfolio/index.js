

export default function Portfolio(props) {

    return (
        <div className="portfolio" id="portfolio">
        <div className="container">
            <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                <p>{props.data.text001}</p>
                <h2>{props.data.title001}</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul id="portfolio-filter">
                        <li data-filter="*" className="filter-active">{props.data.text002}</li>
                        <li data-filter=".filter-1">{props.data.text003}</li>
                        <li data-filter=".filter-2">{props.data.text004}</li>
                        <li data-filter=".filter-3">{props.data.text005}</li>
                    </ul>
                </div>
            </div>
            <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                    <div className="portfolio-wrap">
                        <div className="portfolio-img">
                            <img src={props.data.img002} alt="Image"/>
                        </div>
                        <div className="portfolio-text">
                            <h3>{props.data.title002}</h3>
                            <a className="btn" href={props.data.url002} >+</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="portfolio-wrap">
                        <div className="portfolio-img">
                            <img src="img/portfolio-2.jpg" alt="Image"/>
                        </div>
                        <div className="portfolio-text">
                            <h3>{props.data.title003}</h3>
                            <a className="btn" href="img/portfolio-2.jpg" data-lightbox="portfolio">+</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="portfolio-wrap">
                        <div className="portfolio-img">
                            <img src="img/portfolio-3.jpg" alt="Image"/>
                        </div>
                        <div className="portfolio-text">
                            <h3>{props.data.title004}</h3>
                            <a className="btn" href="img/portfolio-3.jpg" data-lightbox="portfolio">+</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="portfolio-wrap">
                        <div className="portfolio-img">
                            <img src="img/portfolio-4.jpg" alt="Image"/>
                        </div>
                        <div className="portfolio-text">
                            <h3>{props.data.title005}</h3>
                            <a className="btn" href="img/portfolio-4.jpg" data-lightbox="portfolio">+</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.8s">
                    <div className="portfolio-wrap">
                        <div className="portfolio-img">
                            <img src="img/portfolio-5.jpg" alt="Image"/>
                        </div>
                        <div className="portfolio-text">
                            <h3>{props.data.title006}</h3>
                            <a className="btn" href="img/portfolio-5.jpg" data-lightbox="portfolio">+</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="1s">
                    <div className="portfolio-wrap">
                        <div className="portfolio-img">
                            <img src="img/portfolio-6.jpg" alt="Image"/>
                        </div>
                        <div className="portfolio-text">
                            <h3>{props.data.title007}</h3>
                            <a className="btn" href="img/portfolio-6.jpg" data-lightbox="portfolio">+</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};