import { Helmet, HelmetProvider } from "react-helmet-async";


export default function HelmetContainer() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                
                    <body data-spy="scroll" data-target=".navbar" data-offset="51"/>

                    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                    <script src="lib/easing/easing.min.js"></script>
                    <script src="lib/wow/wow.min.js"></script>
                    <script src="lib/waypoints/waypoints.min.js"></script>
                    <script src="lib/typed/typed.min.js"></script>
                    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                    <script src="lib/isotope/isotope.pkgd.min.js"></script>
                    <script src="lib/lightbox/js/lightbox.min.js"></script>
                    <script src="mail/jqBootstrapValidation.min.js"></script>
                    <script src="mail/contact.js"></script>
                    <script src="js/main.js"></script>

                </Helmet>

            </HelmetProvider>
        </>

    )
};

