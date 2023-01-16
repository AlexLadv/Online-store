import './footer.scss';

class Footer {
  render() {
    const el = document.createElement('div');

    el.classList.add('container', 'footer__container', 'border');

    el.innerHTML = `
    <ul class="footer__list list-reset">
      <li class="footer__item">
        <a class="footer__link footer__logo-rs" href="https://rs.school/" target="_blank">
        </a>
      </li>
      <li class="footer__item">
        <a class="footer__link footer__logo-gh" href="https://github.com/AlexLadv" target="_blank">
        </a>
      </li>         
      <li class="footer__item">
        <a class="footer__link footer__logo-gh" href="https://github.com/TUstiugov" target="_blank">
        </a>
      </li>         
      <li class="footer__item">
        <p class="footer__copy">All Rights Reserved © Online Store 2022</p>
      </li>
    </ul>
    `;

    const box = document.getElementById('footer');
    box?.appendChild(el);
  }
}

export { Footer };
