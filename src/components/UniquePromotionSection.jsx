import { useState, useEffect } from 'react'
import './UniquePromotion.css'

const UniquePromotion = () => {
  const [time, setTime] = useState(180)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1)
      }
    }, 1000)

    // Stop the time
    if (time === 0) {
      clearTimeout(timer)
    }

    return () => clearTimeout(timer)
  }, [time])

  // Create format time
  const formatTime = () => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`
  }
  return (
    <ul className="aboutus__uniquepromotion uniquepromotion-content invisibility">
      <li className="uniquepromotion-content__offer">
        <h3 className="uniquepromotion-content__offer-title">
          ПОЛУЧИ ПОДАРОК ПРЯМО СЕЙЧАС
        </h3>
        <p className="uniquepromotion-content__offer-descr">
          Дарми 1&nbsp;год бесплатного обслуживания Бет-мобиля и&nbsp;бесплатное
          оформление ОСАГО
        </p>
      </li>
      <li className="uniquepromotion-content__checkout checkout-product">
        <div className="checkout-product__offertime">
          <span className="checkout-product__offertime-text">
            До&nbsp;конца акции
          </span>
          <span className="checkout-product__offertime-counter">
            00:{formatTime()}
          </span>
        </div>
        <div className="checkout-product__moreinfo moreinfo-product">
          <button className="moreinfo-product__btn-catalog">каталог</button>
          <button className="moreinfo-product__btn-more">подробно</button>
        </div>
      </li>
      <li className="uniquepromotion-content__remark">
        <p className="uniquepromotion-content__remark-descr">
          *Примечание: Весь арсенал Бэтмена является лишь репликой, созданной
          в&nbsp;развлекательных целях, и&nbsp;не&nbsp;предназначен для
          реального использования или применения. Пожалуйста, соблюдайте законы
          и&nbsp;правила вашей страны при использовании арсенала или его
          элементов.
        </p>
      </li>
    </ul>
  )
}

export default UniquePromotion
