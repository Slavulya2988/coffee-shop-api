import {Component} from 'react';
import CoffeeService from '../../services/CoffeeService';
import CatalogItem from '../catalog-item/catalog-item';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/error';
import './catalog.css';


class Catalog extends Component {

    state = {
        coffeList: [],
        loading: true,
        error: false
    }

    coffeeService = new CoffeeService();

    componentDidMount(){
        this.onRequestCoffeeList()
    }

    onRequestCoffeeList = (offset) => {
        this.onCoffeeListLoading(offset);
        this.coffeeService
            .getAllProduct()
            .then(this.onCoffeeListLoaded)
            .catch(this.onCoffeeListError)
    }

    onCoffeeListLoading = () => {
        this.setState({
            loading: true
        })
    }
    onCoffeeListLoaded = (coffeList) => {
        this.setState({
            coffeList,
            loading: false
        })
    }

    onCoffeeListError = () => {
        this.setState({
            error:true,
            loading: false})
    }

    /* рендерінг усіх карток */
    renderCatalogItem(arr){
        const cards = arr.map((item) => {
            const {id, ...itemProps} = item;
            return(
                <CatalogItem key={id} {...itemProps}/>
            )
        });

        return(
            <div className="catalog__items">
                {cards}
            </div>
        )
    }
    /* search product*/
    searchProduct = (massiv, term) => {
        if(term.length === 0){
            return massiv;
        }

        return massiv.filter(item => {
            return item.name.toLowerCase().indexOf(term) > -1
        })

    }
    /* filter */
    filterProduct = (massiv, filter) => {
        if (filter === 'All') {
            return massiv;
        }
        return massiv.filter(item => {
                return item.country === filter
             })
        }

    /* */
    render(){
        const {coffeList, loading, error} = this.state;
        const {term, filter} = this.props;

        const visibleItems = this.filterProduct(this.searchProduct(coffeList,term), filter);
        const items = this.renderCatalogItem(visibleItems);


        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

           return (
            <div className="catalog">
                <div className="catalog__container">
                {errorMessage}
                {spinner}
                {content}
                <div className="catalog__control">
                    <button  className="catalog__button">Load more...</button>
                </div>
                </div>
        </div>
        )
    }

}

export default Catalog;
