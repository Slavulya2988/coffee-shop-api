import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import App from './components/app/app';
// import CoffeeService from './services/CoffeeService';

// отримання набору даних
// const coffeeService = new CoffeeService;
// coffeeService.getAllProduct().then(res => res.product.forEach(element => {
//   console.log(element.name)
// }));

// отримання одного елемента у массиві - title
// const coffeeService = new CoffeeService;
// coffeeService.getImageAbout().then(res => console.log(res.about[0].title));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
