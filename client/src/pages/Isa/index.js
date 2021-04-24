import React, { Component } from 'react';

import Header from "../../components/Header";
import Banner from "../../components/Banner"
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import HelmetContainer from "../../components/HelmetContainer";




class Isa extends Component {
    state = {  
        header: {},
        banner: {},
        footer: {}
      };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({
                header: res.Header,
                banner: res.Banner,
                footer: res.Footer
            }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/internal/data/isa');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };



    render() {

        return (
            <>
                <HelmetContainer />
                <Header src={'isa'} data={this.state.header}/>
                <Banner src={'isa'} data={this.state.banner}/>
                <Footer src={'isa'} data={this.state.footer}/>
                <Loader />
            </>

        )
    }
};

export default Isa;