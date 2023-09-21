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

render(){

    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <main className="page">
                    <About/>
                    <Find   onUpdateSearch = {this.onUpdateSearch}/>
                    <Catalog term = {this.state.term}/>
                </main>
                <Footer/>
            </div>

        </div>
    )
}

}

export default App;
