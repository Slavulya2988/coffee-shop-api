import CatalogItem from '../catalog-item/catalog-item';
import './catalog.css';


const Catalog = ({data}) => {

    const cards = data.map(item => {
		const {id, ...itemProps} = item;

        return  <CatalogItem key= {id} {...itemProps}/>
    })
    /*
    {...item}
   аналогічна структура
    productName={item.productName}
    productType={item.productType}
    productWeight={item.productWeight}
    country={item.country}
    price={item.price}
    */

    return (
        <div className="catalog">
            <div className="catalog__container">
                <div className="catalog__items">
                   {cards}
                </div>
            </div>
    </div>
    )
}

export default Catalog;
