
import githubIcon from './images/gitHubIcon.png'
import linkedInIcon from './images/linkedInIcon.png'

function Footer() {
    return(
        <footer className='mb-3'>
        <h5>Find me online!</h5>
        <a target='_blank' rel='noopener noreferrer' href="https://github.com/DanRingenbach">
            <img alt='GitHub' className='icon' src={githubIcon} />
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/daniel-ringenbach-50a8a41bb/'>
            <img alt='LinkedIn' className='icon' src={linkedInIcon} />
        </a>
        </footer>
    )
}

export default Footer;