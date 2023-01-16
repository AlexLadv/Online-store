import IProductObj from '../interfaces/product-obj';
import createCardButton from '../elements/card-button/card-button';

import './card.scss';

class Card {
  private id: number;
  private title: string;
  private description: string;
  private price: number;
  private discountPercentage: number;
  private rating: number;
  private stock: number;
  private brand: string;
  private category: string;
  private thumbnail: string;
  private images: string[];

  constructor(productObj: IProductObj) {
    this.id = productObj.id;
    this.title = productObj.title;
    this.description = productObj.description;
    this.price = productObj.price;
    this.discountPercentage = productObj.discountPercentage;
    this.rating = productObj.rating;
    this.stock = productObj.stock;
    this.brand = productObj.brand;
    this.category = productObj.category;
    this.thumbnail = productObj.thumbnail;
    this.images = productObj.images;
  }

  renderCard() {
    const cardContainer = new DocumentFragment();

    const card = document.createElement('article');
    card.classList.add('card');

    const titleCard = document.createElement('h2');
    titleCard.classList.add('card__title');
    titleCard.innerText = this.title;
    card.append(titleCard);

    const imageCardContainer = document.createElement('div');
    imageCardContainer.classList.add('card__image-container');

    const imageCard = document.createElement('img');
    imageCard.classList.add('card__image');
    imageCard.src = this.thumbnail;
    imageCard.alt = this.title;
    imageCardContainer.append(imageCard);
    card.append(imageCardContainer);

    const infoCard = document.createElement('div');
    infoCard.classList.add('card__info');

    const category = document.createElement('p');
    category.classList.add('card__category');
    category.classList.add('card__paragraph-info');
    category.innerHTML = `Category: <span>${this.category}</span>`;
    infoCard.append(category);

    const brand = document.createElement('p');
    brand.classList.add('card__brand');
    brand.classList.add('card__paragraph-info');
    brand.innerHTML = `Brand: <span>${this.brand}</span>`;
    infoCard.append(brand);

    const price = document.createElement('p');
    price.classList.add('card__price');
    price.classList.add('card__paragraph-info');
    price.innerHTML = `Price: <span>${this.price}</span>`;
    infoCard.append(price);

    const discount = document.createElement('p');
    discount.classList.add('card__discount');
    discount.classList.add('card__paragraph-info');
    discount.innerHTML = `Discount: <span>${this.discountPercentage}</span>`;
    infoCard.append(discount);

    const rating = document.createElement('p');
    rating.classList.add('card__rating');
    rating.classList.add('card__paragraph-info');
    rating.innerHTML = `Rating: <span>${this.rating}</span>`;
    infoCard.append(rating);

    const stock = document.createElement('p');
    stock.classList.add('card__stock');
    stock.classList.add('card__paragraph-info');
    stock.innerHTML = `Stock: <span>${this.stock}</span>`;
    infoCard.append(rating);

    card.append(infoCard);

    const buttonsCard = document.createElement('div');
    buttonsCard.classList.add('card__buttons');

    const addButton = createCardButton('Add to cart', 'card__button');
    buttonsCard.append(addButton);

    const detailsButton = createCardButton('Details', 'card__button');
    buttonsCard.append(detailsButton);

    card.append(buttonsCard);

    cardContainer.append(card);
    return cardContainer;
  }
}

export { Card };
