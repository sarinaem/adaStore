import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// import ProductList from "./Pages/ProductList.jsx";
// import App from "./App.jsx";
// import CartPage from "./Pages/CartPage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "product",
//     element: <ProductList />,
//   },

//   {
//     path: "cart",
//     element: <CartPage />,
//   },
// ]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
