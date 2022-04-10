//import { Component } from "react";
import React from 'react';
import "../../App.css"
import Footer from "../../components/Footer/Footer"; 
import Header from '../../components/Header/NavBar/NavBar';
import HeroSection from '../../components/Hero/Hero';
import AutoPlay from '../../components/Technologies/Technologies';


export default function Home () {
        return (
            <div className="bodyWrapper">
                <Header />
                <HeroSection/>
                <AutoPlay />
                <Footer />
            </div>
        );
}