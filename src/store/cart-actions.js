import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// Fetch data from server
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-beginning-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok && response.status < 300) return;
      if (!response.ok) {
        throw new Error(`Could not fetch cart data!!! ${response.status}`);
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      console.log(cartData);
      //   if (!cartData) return;
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: `Fetching cart data failed!!!`,
        })
      );
      console.error();
    }
  };
};

// Post(PUT) data to server
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-beginning-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`Sending cart data failed!!! ${response.status}`);
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data sent successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: `Sending cart data failed! ${error.message}!!!`,
        })
      );
      console.error();
    }
  };
};
