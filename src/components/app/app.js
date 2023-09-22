import { Component } from 'react';

import './app.css';

import '../header/header';
import Header from '../header/header';
import About from '../about/about';
import Find from '../find/find';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

class App extends Component {

    state = {
             term: '',
             filter: 'All'
        }


    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onSelectFilter = (filter) => {
        this.setState({filter});
    }

render(){

    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <main className="page">
                    <About/>
                    <Find   onUpdateSearch = {this.onUpdateSearch}
                            onSelectFilter = {this.onSelectFilter}
                    />
                    <Catalog term = {this.state.term}
                             filter = {this.state.filter}
                    />
                </main>
                <Footer/>
            </div>

        </div>
    )
}

}

export default App;
