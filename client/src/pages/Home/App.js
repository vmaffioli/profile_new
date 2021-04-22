import React, { Component } from 'react';

import Banner from "../../components/Banner";
import About from "../../components/About";
//import Portfolio from "../../components/Portfolio";
import Experience from "../../components/Experience";
//import Blog from "../../components/Blog";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HelmetContainer from "../../components/HelmetContainer";
import Loader from "../../components/Loader";





class App extends Component {
    state = {
        about: {},
        banner: {},
        blog: {},
        construction: {},
        experience: {},
        footer: {},
        header: {},
        portfolio: {},
        services: {}

    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({
                about: res.About,
                banner: res.Banner,
                blog: res.Blog,
                construction: res.Construction,
                experience: res.Experience,
                footer: res.Footer,
                header: res.Header,
                portfolio: res.Portfolio,
                services: res.Services
            }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/internal/data/profile');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };


    elements = (
        <>
        </>
    )

    render() {

        return (
            <>
                <HelmetContainer />

                <Header data={this.state.header} />


                <Banner data={this.state.banner} />
                <About data={this.state.about} />
                {/*<Services data={Data.Services}/>*/}
                {/*<Portfolio data={Data.Portfolio} />*/}
                <Experience data={this.state.experience} />
                {/*<Blog data={Data.Blog} />*/}
                <Footer data={this.state.footer} />
                <Loader />
            </>

        )
    }
};

export default App;