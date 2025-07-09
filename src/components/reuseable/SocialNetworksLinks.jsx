import { Link } from 'react-router-dom'
import './SocialNetworksLinks.css'

const SocialNetworksLinks = () => {
  return (
    <>
      <Link
        to="https://www.instagram.com/"
        target="_blank"
        className="social-networks__item-link item-link"
      >
        <img
          className="item-link__one"
          src="assets/images/header/social-networks__instagram.png"
          alt="Логотип Instagram"
        />
      </Link>
      <Link
        to="https://web.telegram.org/a/"
        target="_blank"
        className="social-networks__item-link item-link"
      >
        <img
          className="item-link__two"
          src="assets/images/header/social-networks__telegram.png"
          alt="Логотип Telegram"
        />
      </Link>
      <Link
        to="mailto:batman@gmail.com"
        target="_blank"
        className="social-networks__item-link item-link"
      >
        <img
          className="item-link__three"
          src="assets/images/header/social-networks__email.png"
          alt="Логотип E-mail"
        />
      </Link>
    </>
  )
}

export default SocialNetworksLinks
