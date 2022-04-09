//import { Component } from "react";
import React from 'react';
import '../../App.css';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer"; 
import HeroSection from '../../components/Hero/Hero';


export default function Home () {
        return (
            <div className="bodyWrapper">
                <NavBar />
                <HeroSection/>
                <Footer />
            </div>
        );
}