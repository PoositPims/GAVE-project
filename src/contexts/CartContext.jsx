import { createContext, useState, useEffect } from "react";
import axios from "../config/axios";

const CartContext = createContext();

function CartProvider({ children }) {
  const [yourCart, setYourCart] = useState([]);
  const [cartId, setCartId] = useState([]);
  const [userId, setUserId] = useState([]);

  // console.log(cartId);
  // console.log(yourCartProduct);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(`/carts`, {
          products: "",
          totalPrice: "",
          isPaid: false,
        });
        // console.log("res.data.cart...............,", res.data.cart);
        // console.log("res.data.produc.....................", res.data.product);
        setYourCart(res.data.cart);
        setCartId(res.data.cartId);
        setUserId(res.data.userId);
        // console.log(res.data.userId);
        // setYourCartProduct(res.data.product);
        // console.log(resActive.data);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchCart();
  }, []);

  // ..................................... delete
  const handleClickDelete = async (id) => {
    try {
      await axios.delete(`/carts/${id}`);
      // setYourCart([]);
    } catch (err) {
      console.log(err);
    }
  };
  // ..................................... delete

  // const handleAddCart = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.post("/carts/createCart", {
  //     products: yourCart.products,
  //     totalPrice: yourCart.totalPrice,
  //   });
  //   try {
  //   } catch (err) {
  //     console.dir(err);
  //   }
  // };

  const onAdd = async (addProduct) => {
    const { productId, quantity, shopId } = addProduct;
    // console.log(addProduct);
    await axios.post("/carts", addProduct);

    // const idx = yourCart.findIndex((item) => item.id === productId);
    // const newCart = [...yourCart];
    // if (idx >= -1) {
    //   newCart[idx] = { ...newCart[idx], qty: newCart[idx].qty + 1 };
    // } else {
    //   newCart.push({ qty: 1 });
    // }
  };

  return (
    <CartContext.Provider
      value={{
        yourCart,
        setYourCart,
        onAdd,
        handleClickDelete,
        cartId,
        setCartId,
        userId,
        setUserId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
