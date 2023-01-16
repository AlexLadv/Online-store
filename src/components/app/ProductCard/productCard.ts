import { PRODUCTS } from '../DB/Products.DB';
import LocalStorageUtil from '../Utils/localStorageUtil';
import './productCard.scss';

class ProductCard {
  createModal(id: any) {
    const arr = Array.from(PRODUCTS);
    const elem = document.createElement('div');

    elem.classList.add('modal__wrapper');

    const productsStore = LocalStorageUtil.getProducts();

    PRODUCTS.forEach(() => {
      let activeClass = '';
      let activeText = '';

      if (productsStore.indexOf(id) === -1) {
        activeText = 'ADD TO CART';
      } else {
        activeClass = ' active';
        activeText = 'DROP FROM CART';
      }

      elem.innerHTML = `
        <ul class="modal__container">
          <div class="modal__item">          
            <div class="link-navigation">
              <a href="/">STORE</a>
              <a>${arr[id - 1].category}</a>
              <a>${arr[id - 1].brand}</a>
              <a>${arr[id - 1].title}</a>
            </div>
            <div class="modal__content">
              <div class="modal__img-wrap">
                <img class="modal__img" src="${arr[id - 1].thumbnail}" alt="Card">
              </div>
              <div class="modal__buttons">
                <button class="data add${activeClass}" id="${id}">${activeText}</button>
                <button  id="buy">BUY NOW</button>
              </div>
            </div>
            <div class="modal__text">
              <div class="modal__title">${arr[id - 1].title}</div>
              <div class="modal__info">
                <div class="modal__descr">Description:
                  <span>${arr[id - 1].description}</span>
                </div>
                <div class="modal__descr">Category:
                  <span> ${arr[id - 1].category}</span>
                </div>
                <div class="modal__descr">Brand:
                  <span> ${arr[id - 1].brand}</span>
                </div>
                <div class="modal__descr">Price:
                  <span> €${arr[id - 1].price}</span>
                </div>
                <div class="modal__descr">Discount:
                  <span> ${arr[id - 1].discountPercentage}</span>
                </div>
                <div class="modal__descr">Rating:
                  <span> ${arr[id - 1].rating}</span>
                </div>
                <div class="modal__descr">Stock:
                  <span> ${arr[id - 1].stock}</span>
                </div>
              </div>
              <button
                class="btn bg-contain close"
                onclick="modal.innerHTML = ''"
              >X</button>
            </div>
            
          </div>
        </ul>      
      `;

      const box = document.getElementById('modal');

      box?.appendChild(elem);
    });
  }
}

export default new ProductCard();
