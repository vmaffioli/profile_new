

export default function About(props) {

    return (
        <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="img/about.jpg" alt="Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-header text-left">
                                <p>{props.data.text001}</p>
                                <h2>{props.data.title001}</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    {props.data.text002}
                                </p>
                            </div>
                            <div className="skills">
                                <div className="skill-name">
                                    <p>{props.data.text003}</p><p>85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>{props.data.text004}</p><p>95%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>{props.data.text005}</p><p>90%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>{props.data.text006}</p><p>85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <a className="btn" href="">{props.data.text007}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};