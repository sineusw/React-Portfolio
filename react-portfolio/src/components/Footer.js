import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import './Footer.css'
function Footer() {
    return (
        <div className= 'footer-container'>
            <div className='left-footer'>
                &copy; 2021 Winsor 
            </div>
            <div className='right-footer'>
                <a href="https://github.com/sineusw">
                <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/winsor-sineus/">
                <AiFillLinkedin />
                </a>
            </div>
        </div>
    )
}

export default Footer
