

export default function Services(props) {

    return (
        <div className="service" id="service">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>{props.data.text001}</p>
                    <h2>{props.data.title001}</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-laptop"></i>
                            </div>
                            <div className="service-text">
                                <h3>{props.data.title002}</h3>
                                <p>
                                    {props.data.text002}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-laptop-code"></i>
                            </div>
                            <div className="service-text">
                                <h3>{props.data.title003}</h3>
                                <p>
                                    {props.data.text003}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fab fa-android"></i>
                            </div>
                            <div className="service-text">
                                <h3>{props.data.title004}</h3>
                                <p>
                                    {props.data.text004}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fab fa-apple"></i>
                            </div>
                            <div className="service-text">
                                <h3>{props.data.title005}</h3>
                                <p>
                                    {props.data.text005}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};