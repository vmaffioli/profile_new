
export default function About(props) {

    return (
        <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={props.data.img001} alt="Image" />
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
                                <p>
                                    {props.data.text003}
                                </p>
                                <p>
                                    {props.data.text004}
                                </p>
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