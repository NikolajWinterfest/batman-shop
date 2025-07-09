import { Link } from 'react-router-dom'
import './Header.css'
import SocialNetworksLinks from './reuseable/SocialNetworksLinks'

const Header = () => {
  // Scroll to «Head»
  const scrollToHigh = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Scroll to different «Link's»
  const scrollToLink = (id) => {
    const link = document.getElementById(id)
    const yOffset = -100
    const y = link.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <header className="header ">
      <div className="header__logo">
        <Link to="#" onClick={scrollToHigh} className="header__logo-link">
          <img
            className="header__logo-link--image"
            src="/assets/images/header/header__batman-logo.png"
            alt="Логотип Бетмена"
          />
        </Link>
      </div>
      <div className="header__wrapper invisibility">
        <nav className="header__nav nav">
          <ul className="nav__list nav-menu">
            <li className="nav-menu__item">
              <Link
                to="#catalog"
                onClick={() => scrollToLink('catalog')}
                className="nav-menu__item-link"
              >
                Каталог
              </Link>
            </li>
            <li className="nav-menu__item">
              <Link
                to="#aboutUs"
                onClick={() => scrollToLink('aboutUs')}
                className="nav-menu__item-link"
              >
                О&nbsp;Бетмене
              </Link>
            </li>
            <li className="nav-menu__item">
              <Link
                to="#sales"
                onClick={() => scrollToLink('sales')}
                className="nav-menu__item-link"
              >
                Акции
              </Link>
            </li>
            <li className="nav-menu__item">
              <Link to="tel:+79001235545" className="nav-menu__item-link">
                +7&nbsp;900&nbsp;123 55&nbsp;45
              </Link>
            </li>
            <li
              to="mailto:batman@gmail.com"
              target="_blank"
              className="nav-menu__item"
            >
              <Link className="nav-menu__item-link">Batman@gmail.com</Link>
            </li>
          </ul>
          <div className="nav__list social-networks">
            <SocialNetworksLinks />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
