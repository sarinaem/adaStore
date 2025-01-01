import { TiFilter } from "react-icons/ti";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import ProductItam from "../components/ProductItam";
import data from "../data.json";
import { BsChevronDown } from "react-icons/bs";

const element = 4;

export default function ProductList({
  addToCart,
  cart,
  handleIncrease,
  handleDecrease,
}) {
  const [activeProductId, setActiveProductId] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = data.data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const Pages = Math.ceil(filteredProducts.length / element);

  // const startIndex = (currentPage - 1) * element;
  // const currentProducts = filteredProducts.slice(
  //   startIndex,
  //   startIndex + element
  // );

  const handleAddToCart = (product) => {
    setActiveProductId(product.id);
    addToCart(product);
  };

  const handleNextPage = () => {
    if (currentPage < Pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.count, 0);

  useEffect(() => {
    setCurrentPage(2);
  }, [search]);

  return (
    <div className="">
      <Searchbar search={search} setSearch={setSearch} />
      <div className="flex items-center justify-between mt-2 font-bold mb-2 mx-4">
        <p className="text-[#eb62f5] text-sm whitespace-nowrap font-bold">
          {totalPrice} محصول در سبد خرید شما قرار دارد
        </p>
        <button className="p-2 border border-[#F9F2FC] flex gap-2 items-center text-[#eb62f5] rounded">
          <span className="text-sm">فیلترها</span>
          <TiFilter className="w-5 h-5" />
        </button>
      </div>
      <div className="grid md:grid-cols-1 gap-4 mt-3">
        {/* {currentProducts.map((item) => (
          <div key={item.id} className="flex flex-col mb-4"> */}
        <ProductItam
          // item={item}
          handleAddToCart={handleAddToCart}
          activeProductId={activeProductId}
          cart={cart}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
        {/* </div> */}
        {/* ))} */}
      </div>
      <p className="flex flex-row gap-2 text-[#8e03d0] items-center justify-center mt-4">
        مشاهده بیشتر
        <BsChevronDown className="align-middle" />
      </p>
      <div className="flex mt-4 flex-row items-center justify-center gap-2">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          قبلی
        </button>
        <span className="text-[#8e03d0]">
          صفحه {currentPage} از {Pages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === Pages}>
          بعدی
        </button>
      </div>
    </div>
  );
}

ProductList.propTypes = {
  addToCart: PropTypes.func,
  cart: PropTypes.array,
  handleIncrease: PropTypes.func,
  handleDecrease: PropTypes.func,
};
