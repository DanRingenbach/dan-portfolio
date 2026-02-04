import React, { JSX } from 'react';
import githubIcon from './images/gitHubIcon.png';
import linkedInIcon from './images/linkedInIcon.png';

function Footer(): JSX.Element {
    return(
        <footer className=''>
            <a target='_blank' rel='noopener noreferrer' href="https://github.com/DanRingenbach">
                <img alt='GitHub' className='icon' src={githubIcon.src} />
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/daniel-ringenbach-50a8a41bb/'>
                <img alt='LinkedIn' className='icon' src={linkedInIcon.src} />
            </a>
        </footer>
    );
}

export default Footer;