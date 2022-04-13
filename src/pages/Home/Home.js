//import { Component } from "react";
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import "../../App.css"
import AboutUs from '../../components/About/About';
import CloudnimiDescription from '../../components/Cloudnimi/Cloudnimi';
import ContactUs from '../../components/Contact/Contact';
import Footer from "../../components/Footer/Footer"; 
import Header from '../../components/Header/NavBar/NavBar';
import HeroSection from '../../components/Hero/Hero';
import ScrollToTop from '../../components/ScrollToTop/ScrollTop';
import Service from '../../components/Services/Services';
import TechStacks from '../../components/Technologies/Technologies'

export default function Home () {
    return (
        <div className="bodyWrapper">
                <BrowserRouter>
                    <Header />
                    <HeroSection />
                    <Service />
                    <TechStacks />
                    <AboutUs />
                    <CloudnimiDescription />
                    <ContactUs />
                    <Routes>
                        <Route exact path="/" component={Home}>
                            <Route path="/service" component={Service} />
                            <Route path="/techstack" component={TechStacks} />
                            <Route path="/aboutus" component={AboutUs} />
                            <Route path="/cloudnimidescription" component={CloudnimiDescription} />
                            <Route path="/contact" component={ContactUs} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                <ScrollToTop />
                <Footer />
        </div>
    );
}

