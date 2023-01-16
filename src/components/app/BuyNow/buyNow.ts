import './buyNow.scss';

class BuyNow {
  static render() {
    const test = document.getElementById('buy');
    const testContainer: any = document.getElementById('modal');

    test?.addEventListener('click', () => {
      const productHTML = `
      <ul class="modal__container test">
        <div class="testCart__item">
          <div class="test-container">
            <div class="test__close"></div>
            <div class="testCart__body">
            </div>
              <div class="total-cart border">
                <form class="ng-untouched ng-pristine ng-invalid">
                  <div class="person-details">
                    <h2>Personal details </h2>
                    <div class="person-name form-item">
                      <input type="text" placeholder="Name" formcontrolname="personName" class="test-input">
                    </div>
                    <div class="phone-number form-item">
                      <input type="text" placeholder="Phone number" formcontrolname="phoneNumber" class="test-input">
                    </div>
                    <div class="adress form-item">
                      <input type="text" placeholder="Delivery address" formcontrolname="adress" class="test-input">
                    </div>
                    <div class="email form-item">
                      <input type="text" placeholder="E-mail" formcontrolname="email" class="test-input">
                    </div>
                  </div>
                  <div class="card-details">
                    <h2>Credit card details</h2>
                    <div class="card-data">
                      <div class="number">
                        <input type="text" formcontrolname="cardNumber" placeholder="Card number" class="test-input">
                      </div>
                      <div class="other-data">
                        <div class="valid-data"> 
                          <input type="text" formcontrolname="cardDate" placeholder="Valid" class="test-input">
                        </div>
                        <div class="cvv-data">
                          <input type="text" formcontrolname="cardCVV" placeholder=" CVV Code" class="test-input">
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="test-button" type="submit">CONFIRM</button>
                </form>
              </div>
            </div>
          </div>
          <button class="btn bg-contain close" onclick="modal.innerHTML = ''">X</button>         
        </div>
      </ul>   
      `;
      testContainer.insertAdjacentHTML('beforeend', productHTML);
    });
  }
}

export { BuyNow };
