import { useContext } from "react"
import { dataContext } from "../Context/DataContext"
import '../../Global/components/Collection/styles/card.css'
import '../../Global/components/Collection/styles/collection.css'

export const Products = () => {
  const { data, cart, setCart } = useContext(dataContext)

  const buyProducts = (product) => {
    setCart([...cart, product])
    console.log({cart})
  }

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

{/* <div className="cards__container">
    { data.map(item =>
      <div className='card__container'>
        <img className='card__img' src={ item.image[0] }></img>
        <div className='card__info'>
          <h3 className='card__info-title'>{item.title}</h3>
          <div className='card__info-text'>
            <h4>Product info</h4>
            <p>{item.info}</p>
          </div>
          <div className='card__prices'>
              <p className='card__price'> $ {item.price}</p>
              <button  className='card__btn'>Add to cart</button>
          </div>
        </div>
      </div>) }
  </div> */}


// <Card
// key={ item.id }
// image={item.images[0] }
// title={item.title}
// price={item.price}
// info={item.description} />