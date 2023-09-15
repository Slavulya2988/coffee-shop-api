import { Component } from 'react';
import './about.css';
// import girl from '../../resources/img/about/girl_with_coffe.jpg';
import coffee from '../../resources/img/about/coffee-beans-black.svg';
import CoffeeService from '../../services/CoffeeService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/error';


class About extends Component {
    constructor(props){
        super(props);
        this.updateAbout();
    }
    state = {
       about: {},
       loading: true,
       error: false
    }

    coffeeService = new CoffeeService();

    // загружение блока about
    onAboutLoaded = (about) =>{
        this.setState({
            about,
            loading: false})
    }
    // помилка при завантаженні
    onAboutError = () => {
        this.setState({
            error:true,
            loading: false})
    }
    //отельний метод класса якій обращаеється к серверу і отримує дані
    updateAbout = () => {
        this.coffeeService
            .getAbout(0)
            .then(this.onAboutLoaded)
            .catch(this.onAboutError)

        // this.coffeeService
        //     .getProduct(0)
        //     .then(res => console.log(res))

        // this.coffeeService
        // .getAllProduct()
        // .then(res => console.log(res))

    }

    render(){
        const {about, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const view = !(error || loading) ? <View about={about}/> : null;

        return(
           <>
            {errorMessage}
            {spinner}
            {view}
           </>
        )
    }
};

const View = ({about}) => {
 const {img, title, descr} = about;
    return (
        <section className="about">
        <div className="about__container">
            <div className="about__content">
                <div className="about__img">
                    <img src={img} alt=""/>
                </div>
                <div className="about__descr">
                    <h2 className="about__title title--article">{title}</h2>
                    <div className="devider">
                        <div className="devider__img">
                            <img src={coffee} alt="coffee"/>
                        </div>
                    </div>
                    <div className="about__item">
                        {descr}
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;
