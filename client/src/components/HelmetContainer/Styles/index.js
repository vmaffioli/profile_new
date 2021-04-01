import { Helmet, HelmetProvider } from "react-helmet-async";


export default function Styles() {

    return (
        <>
            <HelmetProvider>

                <Helmet>

                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
                        rel="stylesheet" />

                    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                    <link href="../../../assets/lib/animate/animate.min.css" rel="stylesheet" />
                    <link href="../../../assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                    <link href="../../../assets/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />

                    <link href="../../../assets/css/style.css" rel="stylesheet" />

                </Helmet>

            </HelmetProvider>
        </>

    )
};