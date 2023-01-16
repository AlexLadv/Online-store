import Router from '../../../../node_modules/vanilla-router/index';

class RouterPage {
  router() {
    const router = new Router({
      mode: 'hash',
      root: '/index.html',
      hooks: {
        before: function (newPage) {
          console.info('Before page loads hook', newPage);
        },
      },
      page404: function () {
        const error: any = document.getElementById('main');
        error.innerHTML = `
        <header class="header">
        <div class="container header__container border">
          <a class="logo header__logo" href="index.html">
          </a>
          <h1 class="header__title">Online store</h1>
          <div class="header__basket">
          </div>
        </div>
      </header>
    
      <main class="main">
        <div class="container main__container page-error border">
          <div class="over"></div>
          <div class="error">404</div>
          <div class="notfound">Page not found<br>
            <a href="../../../index.html">go to main page...</a>
          </div>
        </div>
      </main>
    
      <footer class="footer">
        <div class="container footer__container border">
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
              <p class="footer__copy">All Rights Reserved © Online Store 2022</p>
            </li>
          </ul>        
        </div>
      </footer>
        `;
      },
    });

    router.addUriListener();

    router.navigateTo('index.html');
    router.addUriListener();
    router.refresh();
  }
}

export { RouterPage };
