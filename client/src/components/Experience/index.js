

export default function Experience(props) {

    return (
        
        <div className="experience" id="experience">
            <div className="container">
                <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>{props.data.text001}</p>
                    <h2>{props.data.title001}</h2>
                </header>
                <div className="timeline">
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">{props.data.text010}</div>
                            <h2>{props.data.title004}</h2>
                            <h4>{props.data.text008}</h4>
                            <p>
                                {props.data.text009}
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">{props.data.text004}</div>
                            <h2>{props.data.title002}</h2>
                            <h4>{props.data.text002}</h4>
                            <p>
                                {props.data.text003}
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div className="timeline-text">
                            <div className="timeline-date">{props.data.text007}</div>
                            <h2>{props.data.title003}</h2>
                            <h4>{props.data.text005}</h4>
                            <p>
                                {props.data.text006}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};