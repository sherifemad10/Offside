import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { myProdect } from "../Prodects/Prodectlist";


const Context = createContext();



export function ThemeProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [numberItem, setNumberItem] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (id) => {
    const product = myProdect.find((item) => item.id === id);
    if (product) {
      setCart((prevCart) => {
        const updatedCart = [...prevCart, product];
        setNumberItem(updatedCart.length);
        setTotal(calculateTotal(updatedCart));
        return updatedCart;
      });
      alert('Added to Cart');
    } else {
      console.error(`Product with ID ${id} not found`);
    }
  };

  const removeItem = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      setNumberItem(updatedCart.length);
      setTotal(calculateTotal(updatedCart));
      return updatedCart;
    });
  };

  const calculateTotal = (cart) => {
    return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };

    

  return (
    <Context.Provider value={{addToCart, removeItem , cart , numberItem , total}}>
      {children}
    </Context.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;
