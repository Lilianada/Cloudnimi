//import { Component } from "react";
import React from 'react';
import "../../App.css"
import AboutUs from '../../components/About/About';
import Footer from "../../components/Footer/Footer"; 
import Header from '../../components/Header/NavBar/NavBar';
import HeroSection from '../../components/Hero/Hero';
import TechStacks from '../../components/Technologies/Technologies'


export default function Home () {
        return (
            <div className="bodyWrapper">
                <Header />
                <HeroSection />
                <AboutUs />
                <TechStacks />
                <Footer />
            </div>
        );
}