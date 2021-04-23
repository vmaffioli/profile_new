import { Helmet, HelmetProvider } from "react-helmet-async";



export default function HelmetContainer() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <meta name="language" content="en-us" />
                    <meta
                        name="VMaffioli Website"
                        content="Vinícius Maffioli Portfolio"
                    />
                    <meta property="og:image" content="%PUBLIC_URL%/thumb.png" />
                    <meta name="author" content="Vinícius Maffioli" />
                    <meta
                        name="keywords"
                        content="
                            vinicius, 
                            vinícius, 
                            maffioli, 
                            mico,
                            vmaffioli,
                            vinimaffioli,
                            vini,
                            vikk, 
                            developer, 
                            programmer,
                            desenvolvedor,
                            programador,
                            freelancer,
                            freelance,
                            web,
                            site,
                            sites,
                            back-end,
                            back,
                            front-end,
                            front,
                            full-stack,
                            full,
                            stack,
                            fullstack,
                            backend,
                            frontend,
                            javascript,
                            js,
                            node,
                            nodejs,
                            html,
                            bootstrap,
                            responsive,
                            responsivo
                        "
                    />

                        <body data-spy="scroll" data-target=".navbar" data-offset="51" />

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

                        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
                        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                        <link href="lib/animate/animate.min.css" rel="stylesheet" />
                        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />



                        <link href="css/style.css" rel="stylesheet" />


                </Helmet>

            </HelmetProvider>
        </>

    )
};