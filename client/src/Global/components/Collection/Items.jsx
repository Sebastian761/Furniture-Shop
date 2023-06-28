import { useFetch } from "../../hooks/useFetch"
import { Box, ImageList, ImageListItem, ImageListItemBar, Skeleton } from "@mui/material"
import { Link } from "react-router-dom"
import { CollectionLayout } from "./layouts/CollectionLayout"

const url = '/src/Global/data/home-decoration.json'

export const Items = () => {

    const { data, loading } = useFetch(url)
    console.log({data})
    return (
        <CollectionLayout>
            { loading
                ? <ItemsLoading />
                :  <ItemsList data={ data } />
                
            }
        </CollectionLayout>
    )
}

const ItemsList = ({data}  ) =>
    <div className="cards__container">
        { data.map(item =>
            <Card
                key={ item.id }
                image={item.images[0] }
                title={item.title}
                price={item.price}
                info={item.description} />) }
    </div>

const Card = (props) => {
    return (
        <div className='card__container'>
            <img className='card__img' src={ props.image }></img>
            <div className='card__info'>
                <h3 className='card__info-title'>{props.title}</h3>
                <div className='card__info-text'>
                    <h4>Product info</h4>
                    <p>{props.info}</p>
                </div>
                <div className='card__prices'>
                    <p className='card__price'> $ {props.price}</p>
                    <button  className='card__btn'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

const ItemsLoading = () =>
    <ImageList cols={ 4 }>
        { Array.from(new Array(12))
            .map((_, index) =>
                <ItemLoading key={ index } />)
        }
    </ImageList>

const ItemLoading = () =>
    <ImageListItem sx={ {margin: 2} }>
        <Skeleton
            variant="rectangular"
            width={ 310 }
            height={ 118 }
        />
        <Box sx={ { pt: 0.5 } }>
            <Skeleton width='100%' />
            <Skeleton width='100%' />
        </Box>
    </ImageListItem>

