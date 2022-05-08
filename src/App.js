import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';
import './style.css';

export default function App(){
    return (
        <div className="app-container">
            <Main />
            <About />
            <Footer />
        </div>
    )   
}