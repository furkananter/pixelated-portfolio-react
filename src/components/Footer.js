import React from 'react';
import socialOne from '../social/github.png';
import socialTwo from '../social/linkedin.png';
import socialTwoTwo from '../social/linkedin2.png';
import socialThree from '../social/twitter.png';
import socialFour from '../social/spotify.png';

export default function Footer(){
    return (
        <footer>
        <div className="socials-background">
        <a href="https://github.com/furkananter"><img alt="github" className="social github" src={socialOne}/></a>
        <a href="https://linkedin.com/in/furkananter"><img className="social" src={socialTwoTwo}/></a>
        <a href="https://twitter.com/furkananter"><img className="social" src={socialThree}/></a>
        <a href="https://open.spotify.com/playlist/0e2BGit37WzpKQ3Q9ZmmjN?si=ec71b55005f64a7f"><img className="social" src={socialFour}/></a>
        </div>
        </footer>
    )
}