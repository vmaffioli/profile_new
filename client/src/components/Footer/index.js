

export default function Footer(props) {

    return (
        
        <>
        <div className="footer wow fadeIn" data-wow-delay="0.3s">
            <div className="container-fluid">
                <div className="container">
                    <div className="footer-info">
                        <h2>{props.data.text001}</h2>
                        <h3>{props.data.text002}</h3>
                        <div className="footer-menu">
                            <p>{props.data.text003}</p>
                            <p>{props.data.text004}</p>
                        </div>
                        <div className="footer-social">
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-youtube"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                            <a href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <p>&copy; <a href="#">{props.data.text005}</a>{props.data.text006} <a href="https://htmlcodex.com">HTML Codex</a></p>
                </div>
            </div>
        </div>
        <a href="#" className="btn back-to-top"><i className="fa fa-chevron-up"></i></a>
        </>

    )
};