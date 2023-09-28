import { Component } from 'react';

import './app.css';

import '../header/header';
import Header from '../header/header';
import About from '../about/about';
import Find from '../find/find';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

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
   const {term, filter} = this.state;
    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <main className="page">
                    <ErrorBoundary>
                        <About/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Find   onUpdateSearch = {this.onUpdateSearch}
                                onSelectFilter = {this.onSelectFilter}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <Catalog term = {term}
                                 filter = {filter}/>
                    </ErrorBoundary>
                </main>
                <Footer/>
            </div>

        </div>
    )
}

}

export default App;
