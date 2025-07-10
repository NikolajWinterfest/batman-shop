import './Footer.css'
import SocialNetworksLinks from './reuseable/SocialNetworksLinks'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__list invisibility">
          <li className="footer__item footer-picture">
            <img
              className="footer-picture__image"
              src={
                process.env.PUBLIC_URL +
                '/assets/images/footer/footer__picture.jpg'
              }
              alt="Дедушка в костюме Бетмена"
            />
          </li>
          <li className="footer__item copyright">
            <p className="copyright__descr">
              <span className="copyright__descr-first">
                Lorem ipsum dolor sit amet consectetur. Semper vulputate congue
                nibh tincidunt. Adipiscing lobortis blandit sed commodo
                et&nbsp;egestas vitae.
              </span>
              <span className="copyright__descr-second">
                Quis diam blandit non et&nbsp;quam cursus tristique fringilla
                cras. Quis leo
              </span>
              <span className="copyright__descr-third">
                augue volutpat proin ut&nbsp;in&nbsp;sit tincidunt. Risus
                sodales in&nbsp;quis quis mauris aliquet velit eget urna.
                Pulvinar bibendum suscipit vitae faucibus sed phasellus sapien.
              </span>
            </p>
          </li>
          <li className="footer__item social-networks">
            <SocialNetworksLinks />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
