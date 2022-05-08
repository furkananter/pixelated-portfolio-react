import React from 'react';

export default function Main(){
    return (
        <main className="Main-Section">
            <img className="profile-image"  alt="furkan"src='https://yt3.ggpht.com/uABKCMDtM6I09gXapTkC5OqnFC2BnWQbIEe79emAjIKr8AE5IGBH6oiyZXOnJInGZQBM9qIa=s900-c-k-c0x00ffffff-no-rj'/>
            <h1 className="h1-text">Furkan Anter</h1>
            <h5 className="h5-text">Frontend Developer</h5>
            <div className="button-container">
                <button className="btn btn-1">Email</button> 
                <button className="btn btn-2">Linkedin</button> 
            </div>
        </main>
    )
}