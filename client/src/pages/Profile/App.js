import React, { Component } from 'react';

import Banner from "../../components/Banner";
import About from "../../components/About";
import BannerMini from "../../components/BannerMini";
import Experience from "../../components/Experience";
import Portfolio from "../../components/Portfolio";

//import Blog from "../../components/Blog";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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


    render() {

        return (
            <>


                <Header src={'profile'} data={this.state.header} />


                <Banner src={'profile'} data={this.state.banner} />
                <About data={this.state.about} />
                {/*<Services data={Data.Services}/>*/}
                {/*<Portfolio data={this.state.portfolio} />*/}

                <Experience data={this.state.experience} />


                {/*<Blog data={Data.Blog} />*/}
                <Footer src={'profile'} data={this.state.footer} />
                <Loader />
            </>

        )
    }
};

export default App;