

export default function Banner(props) {

    return (
        <div className="hero" id="home">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-6">
                    <div className="hero-content">
                        <div className="hero-text">
                            <p>{props.data.text001}</p>
                            <h1>{props.data.title001}</h1>
                            <h2></h2>
                            <div className="typed-text">{props.data.text002}</div>
                        </div>
                        {/*
                        <div className="hero-btn">
                            <a className="btn" href="">{props.data.text003}</a>
                            <a className="btn" href="">{props.data.text004}</a>
                        </div>
                        */}
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 d-none d-md-block">
                    <div className="hero-image">
                        <img src={props.data.img001} alt="Hero Image"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};