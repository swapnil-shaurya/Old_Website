import React from 'react'
import './Footer.css'
import { Bounce } from 'react-reveal'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import gitlab from '../../images/social/gitlab.png'

const Footer = () => {
  return (
    <footer>
      <Bounce cascade>
        <div><p>    </p></div>
        <div>
          <p className="copyright">
            Made by Swapnil Shaurya
          </p>
          <p className="copyright">
            (281)-837-9121   |   <a
              className="textLink"
              href="mailto:swapnil.shaurya@utexas.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              swapnil.shaurya@utexas.edu
            </a>
          </p>
        </div>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/swapnil-shaurya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="50px" />
          </a>
          <a
            href="https://github.com/swapnil-shaurya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub Logo" width="50px" />
          </a>
          <a
            href="https://gitlab.com/swapnil-shaurya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitlab} alt="Linkedin Logo" width="50px" />
          </a>
        </div>
      </Bounce>
    </footer>
  )
}

export default Footer
