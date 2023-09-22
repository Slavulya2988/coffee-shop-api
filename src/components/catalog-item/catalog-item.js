import './catalog-item.css'
// import coffee from '../../resources/img/catalog/coffe.jpg';

const CatalogItem = (props) => {
    const {name, type, weight, country, price, img} = props;
    return (
        <a href="#" className="catalog__item">
                        <div className="catalog__item-img">
                            <img src={img} alt="coffee"/>
                        </div>
                        <div className="catalog_item-header product">
                            <p> <span>{name}</span></p>
                            <p>{type}</p>
                            <p>{weight}</p>

                        </div>
                        <div className="catalog__item-country">
                            {country}
                        </div>
                        <div className="catalog__item-price">
                            {price + '$'}
                        </div>
                    </a>
    )
}

export default CatalogItem;
