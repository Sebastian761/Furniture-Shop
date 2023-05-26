import '../styles/collection.css'

export const CollectionLayout = ({children}) => {
    return (
        <section className="collection__container">
            {children}
        </section>
    )
}