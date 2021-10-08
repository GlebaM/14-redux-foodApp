// "use-strict";
import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";
// import { uiActions } from "./store/ui-slice";

let isInitial = true;
// let secInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // if (!isInitial && secInitial) {
    //   secInitial = false;
    //   return;
    // }
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
      return;
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

// useEffect(() => {
//   const sendCartData = async () => {
//     dispatch(
//       uiActions.showNotification({
//         status: "pending",
//         title: "Sending...",
//         message: "Sending cart data",
//       })
//     );

//     const response = await fetch(
//       "https://redux-beginning-default-rtdb.firebaseio.com/cart.json",
//       {
//         method: "PUT",
//         body: JSON.stringify(cart),
//       }
//     );
//     if (!response.ok) {
//       throw new Error("Sending cart data failed!!!");
//     }
//     dispatch(
//       uiActions.showNotification({
//         status: "success",
//         title: "Success!",
//         message: "Cart data sent successfully",
//       })
//     );
//   };

//   if (isInitial) {
//     isInitial = false;
//     return;
//   }
//   sendCartData().catch((error) => {
//     dispatch(
//       uiActions.showNotification({
//         status: "error",
//         title: "Error!",
//         message: `Sending cart data failed! ${error.message}`,
//       })
//     );
//   });
// }, [cart, dispatch]);
