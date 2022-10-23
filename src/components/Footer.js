import React from 'react';

import twitter from '../imgs/twitterIcon.png';
import facebook from '../imgs/facebookIcon.png';
import instagram from '../imgs/instagaramIcon.png';
import linkedin from '../imgs/linkedinIcon.png';
import github from '../imgs/githubIcon.png';

const Footer = () => {
    return (
        <footer className='Footer'>
            <a href="https://twitter.com" className='FooterLink'>
                <img src={twitter} alt="twitter-icon" className='FooterLinkImg'/>
            </a>
            <a href="https://facebook.com" className='FooterLink'>
                <img src={facebook} alt="facebook-icon" className='FooterLinkImg'/>
            </a>
            <a href="https://instagram.com" className='FooterLink'>
                <img src={instagram} alt="instagram-icon" className='FooterLinkImg'/>
            </a>
            <a href="https://linkeid.com" className='FooterLink'>
                <img src={linkedin} alt="linkedin-icon" className='FooterLinkImg'/>
            </a>
            <a href="https://github.com" className='FooterLink'>
                <img src={github} alt="github-icon" className='FooterLinkImg'/>
            </a>
        </footer>
    );
};

export default Footer;