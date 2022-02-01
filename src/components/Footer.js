
import githubIcon from './images/gitHubIcon.png'
import linkedInIcon from './images/linkedInIcon.png'

function Footer() {
    return(
        <footer className='mb-3'>
        <h5>Find me online!</h5>
        <a target='_blank' href="https://github.com/DanRingenbach">
            <img className='icon' src={githubIcon} />
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/daniel-ringenbach-50a8a41bb/'>
            <img className='icon' src={linkedInIcon} />
        </a>
        </footer>
    )
}

export default Footer;