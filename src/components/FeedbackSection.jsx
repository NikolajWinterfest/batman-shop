import './FeedbackSection.css'

const FeedbackSection = () => {
  return (
    <section className="feedback">
      <div className="feedback__wrapper">
        <div className="feedback__content">
          <div className="feedback__info invisibility">
            <h3 className="feedback__info-title">Поможем в&nbsp;выборе!</h3>
            <p className="feedback__info-descr">
              Если у&nbsp;вас есть вопросы, или не&nbsp;знаете, что
              выбрать&nbsp;&mdash; оставьте номер телефона, мы&nbsp;вам
              перезвоним!
            </p>
          </div>
          <div className="feedback__inputfields inputfields invisibility">
            <input
              className="feedback__inputfields-phone"
              placeholder="+7 999 883 8828"
            />
            <input className="feedback__inputfields-name" placeholder="Имя" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection
