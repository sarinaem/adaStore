import "./App.css";
import { FaCartShopping } from "react-icons/fa6";
import { PiShoppingBagBold } from "react-icons/pi";
import ProductList from "./Pages/ProductList";
import { useState } from "react";
import CartPage from "./Pages/CartPage";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [activeButton, setActiveButton] = useState("product");
  const [cart, setCart] = useState([]);

  const handleActive = (button) => {
    setActiveButton(button);
  };

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    setCart((prevCart) => {
      if (!prevCart) return [];
      const newProduct = prevCart.find((item) => item.id === product.id);
      if (newProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                count: item.count + 1,
              }
            : item
        );
      } else {
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  };

  const updateItemCount = (id, operation) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          const newCount =
            operation === "increase" ? item.count + 1 : item.count - 1;
          return { ...item, count: Math.max(newCount, 1) }; // اطمینان از اینکه تعداد کمتر از 1 نشود
        }
        return item;
      })
    );
  };

  const handleIncrease = (id) => {
    updateItemCount(id, "increase");
  };

  const handleDecrease = (id) => {
    updateItemCount(id, "decrease");
  };

  const totalPrice = cart.reduce((total, item) => total + item.count, 0);

  return (
    <Router>
      <div className="flex justify-center items-center gap-5 flex-col font-vazir">
        <h1 className="text-[#8e03d0] text-3xl font-bold text-center uppercase my-5 ">
          ada shop
        </h1>
        <div className="flex gap-2 justify-around items-end md:mr-[20rem]">
          <Link to="/">
            <button
              onClick={() => handleActive("product")}
              className={`flex gap-2 md:gap-6 flex-row items-center justify-between rounded-md p-2 px-3 cursor-pointer ${
                activeButton === "product" ? "bg-[#8e03d0]" : "bg-[#F9F2FC]"
              }`}
            >
              <span
                className={`font-bold text-center ${
                  activeButton === "product"
                    ? "text-[#F9F2FC] font-normal"
                    : "text-[#8e03d0]"
                }`}
              >
                محصولات
              </span>
              <PiShoppingBagBold
                className={`w-5 h-5 ${
                  activeButton === "product"
                    ? "text-[#F9F2FC]"
                    : "text-[#8e03d0]"
                }`}
              />
            </button>
          </Link>
          <Link to="/cart">
            <button
              onClick={() => handleActive("cart")}
              className={`relative flex gap-2 md:gap-6 flex-row items-center justify-between rounded-md p-2 md:px-3 cursor-pointer ${
                activeButton === "cart" ? "bg-[#8e03d0]" : "bg-[#F9F2FC]"
              }`}
            >
              <span
                className={`font-bold text-center ${
                  activeButton === "cart" ? "text-[#F9F2FC]" : "text-[#8e03d0]"
                }`}
              >
                سبد خرید
              </span>
              <span className="w-4 h-4 text-[#F9F2FC] bg-[#F20FF2] absolute left-4 bottom-6 md:bottom-5 md:left-5 text-center">
                {totalPrice}
              </span>
              <FaCartShopping
                className={`w-5 h-5 ${
                  activeButton === "cart" ? "text-[#F9F2FC]" : "text-[#8e03d0]"
                }`}
              />
            </button>
          </Link>
        </div>
        <div className="mt-6">
          <Routes>
            <Route
              path="/"
              element={
                <ProductList
                  addToCart={addToCart}
                  cart={cart}
                  handleIncrease={handleIncrease}
                  handleDecrease={handleDecrease}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cart={cart}
                  totalPrice={totalPrice}
                  handleIncrease={handleIncrease}
                  handleDecrease={handleDecrease}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
