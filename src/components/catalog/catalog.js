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
        newItemLoading: false,
        offset: 6,
        itemEnded: false
    }

    coffeeService = new CoffeeService();

    componentDidMount(){
        this.onRequest()
    }

    onRequest = (offset) => {
        this.onCoffeeListLoading();
        this.coffeeService
            .getAllProduct(offset)
            .then(this.onCoffeeListLoaded)
            .catch(this.onCoffeeListError)
    }

    onCoffeeListLoading = () => {
        this.setState({
            loading: true,
            newItemLoading: true
        })
    }

    onCoffeeListLoaded = (newCoffeeList) => {
        let eneded = false;
        if(newCoffeeList.length > 14){
            eneded = true;
        }

        this.setState(({offset}) => (
            {
                coffeList:  newCoffeeList,
                loading: false,
                newItemLoading: false,
                offset: offset + 3,
                itemEnded: eneded
            }
        )
        )
    }

    onCoffeeListError = () => {
        this.setState({
            error:true,
            loading: false})
    }
    /* створення масиву рефів та його наповнення*/
    itemRefs = [];

    setRef = (ref) => {
        this.itemRefs.push(ref);
    }

    /*метод по установки фокуса для обраного елементу каталога */

    focusOnItem = (id) =>{
        this.itemRefs.forEach(item => item.coffeList.remove('catalog__item_selected'));
        this.itemRefs[id].coffeList.add('catalog__item_selected');
        this.itemRefs[id].focus();
    }

    /* рендерінг усіх карток */
    renderCatalogItem(arr){

        const cards = arr.map((item) => {
            const {id, ...itemProps} = item;
            // console.log(id);
            return(
                <CatalogItem
                    key={id}
                    {...itemProps}
                    onClick={() => console.log(id) }
                    />
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
        const {coffeList, loading, error, offset, newItemLoading, itemEnded} = this.state;
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
                    <button
                        className="catalog__button"
                        disabled={newItemLoading}
                        onClick={()=> this.onRequest(offset)}
                        style={{'display': itemEnded ? 'none' : '' }}
                    >Load more...</button>
                </div>
                </div>
        </div>
        )
    }

}

export default Catalog;
