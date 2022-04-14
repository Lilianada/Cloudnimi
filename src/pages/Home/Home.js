//import { Component } from "react";
import React from 'react';
import "../../App.css"
import AboutUs from '../../components/About/About';
import CloudnimiDescription from '../../components/Cloudnimi/Cloudnimi';
import ContactUs from '../../components/Contact/Contact';
import Footer from "../../components/Footer/Footer"; 
import Header from '../../components/Header/NavBar/NavBar';
import HeroSection from '../../components/Hero/Hero';
import ScrollToTop from '../../components/ScrollToTop/ScrollTop';
import Service from '../../components/Services/Services';
import TechStacks from '../../components/Technologies/Technologies';


export default function Home () {
    return (
        <div className="bodyWrapper">
            <Header />
            <HeroSection />
                <Service />
                <TechStacks />
                <AboutUs />
                <CloudnimiDescription />
                <ContactUs /> 
            <ScrollToTop />
            <Footer />
        </div>
    );
}

