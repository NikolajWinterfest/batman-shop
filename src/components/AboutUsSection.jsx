import './AboutUsSection.css'
import UniquePromotion from './UniquePromotionSection'

const AboutUsSection = () => {
  return (
    <section id="aboutUs" className="aboutus">
      <div className="aboutus__wrapper container">
        <div className="aboutus__content ">
          <div className="aboutus__logo invisibility">
            <img
              className="aboutus__logo-batman"
              src="assets/images/header/header__batman-logo.png"
              alt="Логотип Бетмена"
            />
          </div>
          <div className="aboutus__info invisibility">
            <h4 className="aboutus__title">
              Добро пожаловать на&nbsp;сайт каталога Бэтмена
            </h4>
            <p className="aboutus__descr">
              <span className="aboutus__descr-first">
                Наш герой решил выйти на&nbsp;заслуженный покой. Вы&nbsp;можете
                приобрести его эксклюзивный и&nbsp;уникальный арсенал.
              </span>
              <span className="aboutus__descr-second">
                Наш разнообразный ассортимент, включает в&nbsp;себя широкий
                выбор боевых доспехов, оружия и&nbsp;гаджетов, которые подойдут
                как для настоящих поклонников Бэтмена, так и&nbsp;для
                коллекционеров или любителей экстремальных развлечений.
              </span>
              <span className="aboutus__descr-third">
                Наш каталог предлагает вам возможность оценить каждую деталь
                и&nbsp;характеристику предметов, чтобы вы&nbsp;могли выбрать
                идеальное дополнение для вашей коллекции или использовать
                их&nbsp;для осуществления благородных целей.
              </span>
            </p>
          </div>
        </div>
        <div className="aboutus__advantages aboutus-advantages">
          <ul className="aboutus-advantages__list invisibility">
            <li className="aboutus-advantages__item item-advantages">
              <div className="item-advantages__image">
                <img
                  className="item-advantages__image-icon"
                  src="assets/images/aboutus/aboutus-advantages__deliver-food.png"
                  alt="Иконка - Доставка"
                />
              </div>
              <div className="item-advantages__info">
                <h3 className="item-advantages__info-title">Доставка</h3>
                <p className="item-advantages__info-descr">
                  Удобно и&nbsp;безопасно
                </p>
              </div>
            </li>
            <li className="aboutus-advantages__item item-advantages">
              <div className="item-advantages__image">
                <img
                  className="item-advantages__image-icon"
                  src="assets/images/aboutus/aboutus-advantages__discount.png"
                  alt="Иконка - Акции"
                />
              </div>
              <div className="item-advantages__info">
                <h3 className="item-advantages__info-title">Акции</h3>
                <p className="item-advantages__info-descr">
                  Сэкономить и&nbsp;получить бонусы
                </p>
              </div>
            </li>
            <li className="aboutus-advantages__item item-advantages">
              <div className="item-advantages__image">
                <img
                  className="item-advantages__image-icon"
                  src="assets/images/aboutus/aboutus-advantages__muscle.png"
                  alt="Иконка - Мускл"
                />
              </div>
              <div className="item-advantages__info">
                <h3 className="item-advantages__info-title">Проверенно</h3>
                <p className="item-advantages__info-descr">
                  Для благородных целей
                </p>
              </div>
            </li>
          </ul>
        </div>
        <UniquePromotion />
      </div>
    </section>
  )
}

export default AboutUsSection
