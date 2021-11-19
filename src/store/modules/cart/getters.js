function getCart({ cart }) {
  return cart;
}
function getCartLength({ cart }) {
  return cart.length;
}
function getCartTotal({ cart }) {
  return cart.reduce((acc, curr) => {
    return acc + curr.amount * curr.price;
  }, 0);
}
const getCartItem =
  ({ cart }) =>
  ({ uid }) => {
    const cartItem = cart.find((item) => item.uid === uid);
    return cartItem.amount;
  };
export default {
  getCart,
  getCartLength,
  getCartTotal,
  getCartItem,
};
