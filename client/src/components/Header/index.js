

export default function Header(props) {

    return (
        <>
            <div className="navbar navbar-expand-lg bg-light navbar-light">
                <div className="container-fluid">
                    <a href="index.html" className="navbar-brand">{props.data.title001}</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <a href="#home" className="nav-item nav-link active"><b>{props.data.nav_item001}</b></a>
                            <a href="#about" className="nav-item nav-link"><b>{props.data.nav_item002}</b></a>
                            {/*<a href="#portfolio" className="nav-item nav-link"><b>{props.data.nav_item003}</b></a>*/}
                            <a href="#experience" className="nav-item nav-link"><b>{props.data.nav_item004}</b></a>
                            {/*<a href="#blog" className="nav-item nav-link"><b>{props.data.nav_item005}</b></a>*/}
                            <a href="#footer" className="nav-item nav-link"><b>{props.data.nav_item006}</b></a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};