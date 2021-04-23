

export default function Footer(props) {

    return (

        <>
            <div className="footer wow fadeIn" data-wow-delay="0.3s" id="footer">
                <div className="container-fluid">
                    <div className="container">
                        <div className="footer-info">
                            <h2>{props.data.text001}</h2>
                            <h3><a href={props.data.cv} className="cvlink"> {props.data.text002}</a></h3>
                            <div className="footer-menu">
                                <p>{props.data.text003}<br /><br />
                                {props.data.text004}</p>
                            </div>
                            <div className="footer-social">

                                <a href={props.data.github}><i className="fab fa-github"></i></a>
                                <a href={props.data.linkedin}><i className="fab fa-linkedin-in"></i></a>
                                <a href={props.data.hackerrank}><i className="fab fa-hackerrank"></i></a>
                                <a href={props.data.npm}><i className="fab fa-npm"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="container copyright">
                        <p><a href="#">{props.data.text005}</a>{props.data.text006} {/*<a href="https://htmlcodex.com">HTML Codex</a>*/}</p>
                    </div>
                </div>
            </div>
            <a href="#" className="btn back-to-top"><i className="fa fa-chevron-up"></i></a>
        </>

    )
};