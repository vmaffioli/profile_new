

export default function Header(props) {

    const profile = (
        <>
            <div className="navbar navbar-expand-lg bg-light navbar-light">
                <div className="container-fluid">
                    <a href="./" className="navbar-brand">{props.data.title001}</a>
                    <div className="navbar-collapse justify-content-between" >
                        <div className="navbar-nav ml-auto">
                            <div className="row rownav">
                                <a href="#home" className="nav-item nav-link"><b>{props.data.nav_item001}</b></a>
                                <a href="#about" className="nav-item nav-link"><b>{props.data.nav_item002}</b></a>
                               {/* <a href="#portfolio" className="nav-item nav-link"><b>{props.data.nav_item003}</b></a>*/}
                                <a href="#experience" className="nav-item nav-link"><b>{props.data.nav_item004}</b></a>
                                {/*<a href="#blog" className="nav-item nav-link"><b>{props.data.nav_item005}</b></a>*/}
                                <a href="#footer" className="nav-item nav-link"><b>{props.data.nav_item006}</b></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    const isa = (
        <>
            <div className="navbar navbar-expand-lg bg-light navbar-light isa-navbar ">
                <div className="container-fluid">
                    <a href="./" className="navbar-brand">{props.data.title001}</a>
                    <div className="navbar-collapse justify-content-between" >
                        <div className="navbar-nav ml-auto">
                            <div className="row rownav">
                                <a href="/" className="nav-item isa-nav-link"><b>{props.data.nav_item002}</b></a>
                                {/*<a href="#portfolio" className="nav-item nav-link"><b>{props.data.nav_item003}</b></a>*/}
                                <a href="#experience" className="nav-item nav-link"><b>{props.data.nav_item004}</b></a>
                                {/*<a href="#blog" className="nav-item nav-link"><b>{props.data.nav_item005}</b></a>*/}
                                <a href="#footer" className="nav-item nav-link"><b>{props.data.nav_item006}</b></a>
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