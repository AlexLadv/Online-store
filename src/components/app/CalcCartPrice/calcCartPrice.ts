import { Calc } from '../Calc/calc';

class CalcCartPrice {
  static calcCartPrice() {
    window.addEventListener('click', function (event: any) {
      let counter;
      let amountСontrol;
      let priceDn;
      let priceTotal = 0;

      if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.number-control');
        counter = counterWrapper.querySelector('[data-counter]');
      }

      if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
        const counterWrapper = event.target.closest('.number-control');
        const amountEl = counterWrapper.querySelector('.items__current');
        const totalCart = document.querySelector('.total-cart');
        const prod: any = totalCart?.ownerDocument.querySelector('[data-counter="prod"]');
        amountСontrol = counterWrapper.querySelector('.amount-control');
        priceDn = counterWrapper.querySelector('.price-dn');
        priceTotal = parseInt(amountEl.innerText) * parseInt(priceDn.innerText);
        amountСontrol.innerText = priceTotal;
        prod.innerText = +prod.innerText + 1;
      }

      if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
          counter.innerText = --counter.innerText;
          Calc.calc();
          const counterWrapper = event.target.closest('.number-control');
          const amountEl = counterWrapper.querySelector('.items__current');
          const totalCart = document.querySelector('.total-cart');
          const prod: any = totalCart?.ownerDocument.querySelector('[data-counter="prod"]');
          amountСontrol = counterWrapper.querySelector('.amount-control');
          priceDn = counterWrapper.querySelector('.price-dn');
          priceTotal = parseInt(amountEl.innerText) * parseInt(priceDn.innerText);
          amountСontrol.innerText = priceTotal;
          prod.innerText = +prod.innerText - 1;
        } else if (event.target.closest('.number-control') && parseInt(counter.innerText) === 1) {
          event.target.closest('.shoppingCart__wrapper').remove();

          // Отображение статуса корзины Пустая / Полная
          // toggleCartStatus();

          // Пересчет общей стоимости товаров в корзине
        }
      }
    });
  }
}

export { CalcCartPrice };
