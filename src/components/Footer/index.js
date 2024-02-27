import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <h1 className="header-covid-logo">COVID19INDIA</h1>

      <p className="footer-paragraph">
        we stand with everyone fighting on the front lines
      </p>
      <div className="footer-social-logo">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/bhanu100141"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  )
}
