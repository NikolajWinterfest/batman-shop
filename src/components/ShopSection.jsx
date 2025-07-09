import ShopSectionProducts from './reuseable/ShopSectionProducts'
import './ShopSection.css'

const ShopSection = ({ products }) => {
  const productsWithDiscount = products.filter((product) => product.hasDiscount)

  return (
    <section className="shop">
      <div className="shop__wrapper">
        <div className="shop__content shop-content">
          <div id="sales" className="shop-content__sales sales">
            <div className="sales__titleblock ">
              <h3 className="sales__titleblock-title invisibility">Распродажа</h3>
            </div>
            <ShopSectionProducts products={productsWithDiscount} />
          </div>
          <div id="catalog" className="shop-content__everyday everyday">
            <div className="everyday__titleblock">
              <h3 className="everyday__titleblock-title invisibility">Повседневное</h3>
            </div>
            <ShopSectionProducts products={products} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopSection
