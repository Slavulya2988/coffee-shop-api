import { Component } from 'react';
import './catalog-item.css';
import PropTypes from 'prop-types';


class CatalogItem extends Component {


    render(){
        const {name, type, weight, country, price, img} = this.props;
    return (

            <a href="#"
               className="catalog__item"

               >
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
}

CatalogItem.propTypes = {
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default CatalogItem;
