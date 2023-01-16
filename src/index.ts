/* eslint-disable prettier/prettier */
import { Filter } from './components/app/Filter/filterItems';
import { Range } from './components/app/Range/range';
import { Card } from './components/app/Card/card';
import { Header } from './components/app/Header/header';
import { Footer } from './components/app/Footer/footer';
import { Shopping } from './components/app/Shopping/shopping';
import { ShoppingCart } from './components/app/ShoppingCart/shoppingCart';
import { AddProductsCart } from './components/app/AddProductsCart/addProductsCart';
import { RouterPage } from './components/app/Router/router';
import { CalcCartPrice } from './components/app/CalcCartPrice/calcCartPrice';
import './global.scss';

const router = new RouterPage();
router.router()

const filter = new Filter();
filter.createCategory();
filter.createBrand();
filter.createPrice();
filter.createStock();

const range = new Range();
range.createRangePrice();
range.createRangeStock();

const card = new Card();
card.createCard();
card.currentCard();
card.detailCard();

const header = new Header();
header.render();

const footer = new Footer();
footer.render();

const shopping = new Shopping();
shopping.render();

const addProductsCar = new AddProductsCart();
addProductsCar.render();

