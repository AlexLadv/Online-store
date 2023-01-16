import { PRODUCTS } from '../DB/Products.DB';
import { ShoppingCart } from '../ShoppingCart/shoppingCart';
import { BuyNow } from '../BuyNow/buyNow';
import { CalcCartPrice } from '../CalcCartPrice/calcCartPrice';
import LocalStorageUtil from '../Utils/localStorageUtil';
import './shopping.scss';

class Shopping {
  ROOT_SHOPPING: any = document.getElementById('totalPrice');
  ROOT_SHOPPING2: any = document.querySelector('.header__basket-content');
  handleClear() {
    this.ROOT_SHOPPING.innerHTML = '';
  }

  render() {
    const productsStore = LocalStorageUtil.getProducts();
    let sumCatalog = 0;
    let sumProduct = 0;

    PRODUCTS.forEach(({ id, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        sumCatalog += price;
      }
    });
    sumProduct += productsStore.length;

    const html = `
      <div class="shopping-container">
        <div class="shopping__close"></div>
        <table>
          <tr>
            <td class="shopping-element__name">💥 Cart total:</td>
            <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
          </tr>
        </table>
      </div>
    `;

    const html2 = `<td>${sumProduct.toLocaleString()}</td>`;
    this.ROOT_SHOPPING.innerHTML = html;
    this.ROOT_SHOPPING2.innerHTML = html2;

    const tesr: any = document.getElementById('trt');

    tesr.addEventListener('click', () => {
      ShoppingCart.render();
      BuyNow.render();
      CalcCartPrice.calcCartPrice();
    });
  }
}

export default new Shopping();
export { Shopping };
