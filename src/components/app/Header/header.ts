import './header.scss';

class Header {
  render() {
    const el = document.createElement('div');

    el.classList.add('container', 'header__container', 'border');

    el.innerHTML = `
      <a class="logo header__logo" href="!#">
        <h1 class="header__title">Online store</h1>
      </a>
      <div class="header__total-price" id="totalPrice">
        <span>Cart total:</span> €0.00
      </div>
      <div class="header__basket-total">
      <div class="basket" id="trt"></div>
        <div class="header__basket-content">0</div>
      </div>
    `;

    const box = document.getElementById('header');

    box?.appendChild(el);
  }
}

export { Header };
