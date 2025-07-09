import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper container invisibility">
        <div className="hero__content">
          <h1 className="hero__title">ТЫ - НОВЫЙ ТЕМНЫЙ РЫЦАРЬ</h1>
          <p className="hero__descr">
            Готов сражаться с&nbsp;злыми силами города?
          </p>
        </div>
        <button className="hero__btn">Каталог</button>
      </div>
    </section>
  )
}

export default HeroSection
