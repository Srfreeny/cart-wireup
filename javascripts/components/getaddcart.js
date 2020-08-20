import { showCartItems, cartModalMaker } from './../components/modalcart.js'
import { setCart } from './../helpers/cartData.js'
import { cartCreator } from './../components/cartdom.js'

const makeCart = () => {

  $('#cart').html(
    `${cartModalMaker()}
    ${cartCreator()}`
  )

    $("#charge-it").click(() => {
      const ccNum = $("#credit-card").val();
      chargeIt(ccNum);
    });
  
    showCartItems();
  };

  const addToCart = (array, index) => {
    const cartButton = $(`#cart-add-${index}`);
  
    cartButton.on("click", () => {
      setCart(array[index]);
      makeCart();
    });
  };

  export { makeCart, addToCart }