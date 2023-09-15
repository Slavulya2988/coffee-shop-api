import { Component } from 'react';

import './app.css';

import '../header/header';
import Header from '../header/header';
import About from '../about/about';
import Find from '../find/find';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: [
                {name: 'Aromatico', type: 'Coffee', weight: '1 kg', country: 'Brazil', price: '6.99', urlImg: "./img/catalog/coffee.jpg", id: 1},
                {name: 'Puzanno', type: 'Coffee', weight: '1 kg', country: 'Brazil', price: '6.99', urlImg: "./img/catalog/coffee.jpg", id: 2},
                {name: 'Truffalo', type: 'Coffee', weight: '1 kg', country: 'Kenya', price: '8.99', urlImg: "./img/catalog/coffee.jpg", id: 3},
                {name: 'Basttardo', type: 'Coffee', weight: '1 kg', country: 'Kenya', price: '8.99', urlImg: "./img/catalog/coffee.jpg", id: 4},
                {name: 'Aroma', type: 'Coffee', weight: '1 kg', country: 'Columbia', price: '16.99', urlImg: "./img/catalog/coffee.jpg", id: 5},
                {name: 'Lafaretto', type: 'Coffee', weight: '1 kg', country: 'Columbia', price: '16.99', urlImg: "./img/catalog/coffee.jpg", id: 6}
            ],
            term: '',
            filter: 'All'
        }
    }

    searchProduct = (massiv, term) => {
        if(term.length === 0){
            return massiv;
        }

        return massiv.filter(item => {
            return item.name.toLowerCase().indexOf(term) > -1
        })

    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterProduct = (massiv, filter) => {
        if (filter === 'All') {
            return massiv;
        }
        return massiv.filter(item => {
                return item.country === filter
             })
        }


    onSelectFilter = (filter) => {
        this.setState({filter});
    }


render(){
 const {product, term, filter} = this.state;
 const visibleProduct  = this.filterProduct(this.searchProduct(product, term), filter);
    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <main className="page">
                    <About/>
                    <Find onUpdateSearch = {this.onUpdateSearch}
                          filter = {filter}
                          onSelectFilter = {this.onSelectFilter}
                         />
                    <Catalog data = {visibleProduct}/>
                </main>
                <Footer/>
            </div>

        </div>
    )
}

}

export default App;
