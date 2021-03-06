
export default function Banner(props) {

    const profile = (
        <>
            <video className='videoTag' autoPlay loop muted>
                <source src="vid/banner-bg.mp4" type='video/mp4' />
            </video>
            <div className="hero" id="home">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="hero-content">
                                <div className="hero-text">
                                    <p>{props.data.text001}</p>
                                    <h1>{props.data.title001}</h1>
                                    <h2></h2>
                                    <div className="typed-text">Improving with agility, Developing for Passion.</div>
                                </div>
                                {/*
                        <div className="hero-btn">
                            <a className="btn" href="">{props.data.text003}</a>
                            <a className="btn" href="">{props.data.text004}</a>
                        </div>
                        */}
                            </div>
                        </div>
                        {/*
                        <div className="col-sm-12 col-md-6 d-none d-md-block">
                            <div className="hero-image">
                                <img src={props.data.img001} alt="Hero Image" />
                            </div>
                        </div>
                        */}

                    </div>
                </div>
            </div>
        </>
    )

    const isa = (
        <>
            <video className='videoTag' autoPlay loop muted>
                <source src="vid/dictionary-bg.mp4" type='video/mp4' />
            </video>
            <div className="isa-hero isa-hero-banner" id="isa-home">
                <div className="container-fluid">
                    <div className="row align-items-center">

                        <div className="col-sm-12 col-md-5 ">
                            <div className="isa-hero-image">
                                <img src={props.data.img001} alt="Hero Image" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 isa-hero-text">
                                <div className="isa-hero-text">
                                    <h1>{props.data.title001}</h1>
                                    <p>{props.data.text001}</p>
                                    <p><br />{props.data.text002}</p>
                                </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )

    let element

    if (props.src === 'profile') {
        element = profile
    } else if (props.src === 'isa') {
        element = isa
    }

    return (
        <>
            {element}
        </>
    )
};