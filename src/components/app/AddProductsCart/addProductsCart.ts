import LocalStorageUtil from '../Utils/localStorageUtil';
import { Shopping } from '../Shopping/shopping';
import './style.scss';

class AddProductsCart {
  render() {
    const allProductsCart: any[] = Array.from(document.getElementsByClassName('add') as any);

    allProductsCart.forEach((el: any) => {
      const currentCard = () => {
        el.addEventListener('click', () => {
          LocalStorageUtil.putProducts(el.id);

          const products = LocalStorageUtil.getProducts();
          let pushProduct = false;
          const index = products.indexOf(el.id);

          const shopping = new Shopping();
          shopping.render();

          if (index === -1) {
            pushProduct = true;
            allProductsCart[el.id - 1].innerHTML = 'ADD TO CART';
            allProductsCart[el.id - 1].classList.remove('active');
          } else {
            allProductsCart[el.id - 1].innerHTML = 'DROP FROM CART';
            allProductsCart[el.id - 1].classList.add('active');
          }
        });
      };

      currentCard();
    });
  }
}

export { AddProductsCart };
