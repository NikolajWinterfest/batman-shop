import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ShopSectionProducts.css'

const ShopSectionProducts = ({ products }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
  }
  return (
    <ul className="sales__list">
      <Slider {...settings} className="sales__swiper">
        {products.map((product) => {
          return (
            <li key={product.id} className="sales__swiper-item item-sales">
              <div className="item-sales__image invisibility">
                <img
                  className="item-sales__image-picture"
                  src={`${process.env.PUBLIC_URL}/${product.image}`}
                  alt={product.title}
                />
                {product.isBesteller && (
                  <div className="item-sales__image-besteller">хит продаж</div>
                )}
              </div>
              <div className="item-sales__info sales-info invisibility">
                <div className="sales-info__headinfo headinfo">
                  <div className="headinfo__priceandtitle">
                    <div className="headinfo__priceandtitle-price">
                      {product.price} $
                    </div>
                    <div className="headinfo__priceandtitle-title">
                      {product.title}
                    </div>
                  </div>
                  <div className="headinfo__favorite"></div>
                  <p className="sales-info__descr">{product.description}</p>
                </div>
                <button className="sales-info__btn">Купить</button>
              </div>
            </li>
          )
        })}
      </Slider>
    </ul>
  )
}

export default ShopSectionProducts
