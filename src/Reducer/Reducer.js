export const initialState = {
  cart: [],
};
const reducer = (state, action) => {
      // console.log(action);
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.item],
        };
      case "REMOVE_FROM_CART":
        const index = state.cart.findIndex(
          (cartItem) => cartItem.id === action.id
        );
        let newcart = [...state.cart];

        if (index >= 0) {
          newcart.splice(index, 1);
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in cart!`
          );
        }
        
        return {
          ...state,
          cart: newcart,
        };
      default:
        return state;
    }
}
export default reducer;