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
        error: false,
        filter: 'All'
    }

    coffeeService = new CoffeeService();

    componentDidMount(){
              this.updateCoffeeList();

    }

    updateCoffeeList = () => {
        this.coffeeService
        .getAllProduct()
        .then(this.onCoffeeListLoaded)
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

    // onUpdateSearch = (term) => {
    //     this.setState({term});
    // }

    searchProduct = (massiv, term) => {
        if(term.length === 0){
            return massiv;
        }

        return massiv.filter(item => {
            return item.name.toLowerCase().indexOf(term) > -1
        })

    }
    /* filter */
    // filterProduct = (massiv, filter) => {
    //     if (filter === 'All') {
    //         return massiv;
    //     }
    //     return massiv.filter(item => {
    //             return item.country === filter
    //          })
    //     }


    // onSelectFilter = (filter) => {
    //     this.setState({filter});
    // }
    /* */
    render(){
        const {coffeList, loading, error} = this.state;
        const {term} = this.props;

        const visibleItems = this.searchProduct(coffeList,term);
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
                </div>
        </div>
        )
    }

}

export default Catalog;
