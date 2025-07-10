import { useState } from 'react'
import './ModalWindow.css'

const ModalWindow = () => {
  const [firstModalWindow, setFirstModalWindow] = useState(true)
  const [secondModalWindow, setSecondModalWindow] = useState(false)
  const [checkbox, setCheckbox] = useState(false)

  // Get all elements with class «invisibility»
  const invisibility = document.querySelectorAll('.invisibility')

  // CLOSE FIRST «Modal Window» AND OPEN SECOND «Modal Window» //
  const handleShowSecondWindow = () => {
    setFirstModalWindow(!firstModalWindow) // Here we close FIRST «Modal Window»

    setSecondModalWindow(!secondModalWindow) // Here we open SECOND «Modal Window»
  }

  // CLOSE SECOND «Modal Window» //
  const handleCloseModalWindow = () => {
    const modalWindow = document.querySelector('.modalwindow__background') // Get class of full block «Modal Window»
    const body = document.querySelector('body') // Get tag «body»

    if (checkbox === true) {
      if (body.classList.contains('block')) {
        body.classList.remove('block') // Remove class «block» of «body» which blocks scrolling
      }
      modalWindow.classList.add('hidden') // Here we close SECOND «Modal Window»

      invisibility.forEach((elem) => elem.classList.remove('invisibility')) // Remove all class'es «invisibility» for show content
    }
  }

  // Monitoring Changes of «Checkbox» //
  const handleCheckboxChange = () => {
    setCheckbox(!checkbox)
  }

  // Redirect for villains
  const handleMakeGoodDeeds = () => {
    window.location = 'https://dobro.ru/'
  }

  return (
    <div className="modalwindow__background">
      {firstModalWindow && (
        <ul className="modalwindow__content">
          <li className="modalwindow__picture">
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/images/window/window__joker.png'
              }
              alt="Джокер"
            />
          </li>
          <li className="modalwindow__verification verification">
            <div className="verification__info">
              <h1 className="verification__info-title">
                Сайт запрещено посещать злодеям
              </h1>
              <p className="verification__info-descr">
                Нажимая эту кнопку, вы даете согласие на обработку данных и
                подтверждение того, что вы не злодей и имеете благие намерения.
              </p>
            </div>
            <div className="verification__choice">
              <button
                onClick={() => handleShowSecondWindow()}
                className="verification__choice-agree"
              >
                Согласен
              </button>
              <button
                onClick={() => handleMakeGoodDeeds()}
                className="verification__choice-disagree"
              >
                Нет, я злодей
              </button>
            </div>
          </li>
        </ul>
      )}
      {secondModalWindow && (
        <ul className="modalwindow__content-double content-double">
          <li className="content-double__picture">
            <img
              className="content-double__picture-image"
              src={
                process.env.PUBLIC_URL + '/assets/images/window/window__fry.png'
              }
              alt="Фрай из «Футурамы»"
            />
          </li>
          <li className="content-double__item">
            <span className="content-double__item-question">Вы уверены?</span>
            <div className="content-double__item-confirm item-confirm">
              <span className="item-confirm__true">Да!</span>
              <label className="item-confirm__label confirm-label">
                <input
                  className="confirm-label__input visually-hidden"
                  type="checkbox"
                  checked={checkbox}
                  onChange={handleCheckboxChange}
                />
                <span className="confirm-label__checkbox"></span>
              </label>
              <button
                onClick={() => handleCloseModalWindow()}
                className="item-confirm__btn"
              >
                GO
              </button>
            </div>
          </li>
          <li className="content-double__rectangle"></li>
        </ul>
      )}
    </div>
  )
}

export default ModalWindow
