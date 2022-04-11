//import { Component } from "react";
import React from 'react';
import "../../App.css"
import AboutUs from '../../components/About/About';
import CloudnimiDescription from '../../components/Cloudnimi/Description';
import Footer from "../../components/Footer/Footer"; 
import Header from '../../components/Header/NavBar/NavBar';
import HeroSection from '../../components/Hero/Hero';
import Service from '../../components/Services/Services';
import TechStacks from '../../components/Technologies/Technologies'


export default function Home () {
        return (
            <div className="bodyWrapper">
                <Header />
                <HeroSection />
                <CloudnimiDescription />
                <AboutUs />
                <Service />
                <TechStacks />
                <Footer />
            </div>
        );
}