import { useContext } from "react"
import { dataContext } from "../Context/DataContext"
import '../../Global/components/Collection/styles/card.css'
import '../../Global/components/Collection/styles/collection.css'

export const Products = () => {
  const { data, buyProducts } = useContext(dataContext)

  return data.map((product) => {
    return (
        <div className="card__container" key={product.id}>
          <img src={product.image} alt="card-image" className="card__img" />
          <div className="card__info">
            <h3 className="card__info-title">{product.title}</h3>
            <div className="card__info-text">
              <h4>Product Info</h4>
              <p>{product.description}</p>
            </div>
            <div className="card__prices">
            <p className="card__price">$ {product.price}</p>
            <button className="card__btn" onClick={()=> buyProducts(product)}>Add to cart</button>
          </div>
          </div>
        </div>
    )
  }
  )

}