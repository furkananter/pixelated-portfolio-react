import React from 'react';
import profile from '../profile-image.png';
import socialTwo from '../social/linkedin.png';


export default function Main(){
    return (
        <main className="Main-Section">
            <img className="profile-image"  alt="furkan" src={profile}/>
            <h1 className="h1-text">Furkan Anter</h1>
            <h5 className="h5-text">Frontend Developer</h5>
            <div className="button-container">
                <button className="btn btn-1">Email</button> 
                <button className="btn btn-2">Linked<img className="social" src={socialTwo}/></button>

            </div>
        </main>
    )
}