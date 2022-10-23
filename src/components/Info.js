import React from 'react';
import profilePic from '../imgs/profilePic.png';
import email from '../imgs/email.png';

const Info = () => {
    return (
        <div className="Info">
            <img src={profilePic} alt="profile-pic" className='InfoImg'/>
            <h1 className='InfoName'>Akira Tanaka</h1>
            <span className='InfoJob'>Frontend Developer</span>
            <a className='InfoWebSite'>akiratanaka.website</a>
            <button className='InfoButton'>
                <img src={email} alt="email-img"/>
                Email
            </button>
        </div>
    );
};

export default Info;