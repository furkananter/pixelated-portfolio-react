import React from 'react';
import socialOne from '../social/github.png';
import socialTwo from '../social/linkedin.png';
import socialThree from '../social/insta.png';
// import socialFour from '../social/twitter.png';


export default function Footer(){
    return (
        <footer>
        <div className="socials-background">
        <a href="https://github.com/furkananter"><img alt="github" className="social" src={socialOne}/></a>
        <a href="https://linkedin.com/in/furkananter"><img className="social" src={socialTwo}/></a>
        <a href="https://twitter.com/furkananter"><img className="social" src={socialThree}/></a>
        <a href="https://google.com"><img className="social" src="#"/></a>
        </div>
        </footer>
    )
}