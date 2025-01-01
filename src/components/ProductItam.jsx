import data from "../data.json";
import { FaCartShopping } from "react-icons/fa6";
import PropTypes from "prop-types";

export default function ProductItem({
  activeProductId,
  handleIncrease,
  handleAddToCart,
  handleDecrease,
  cart,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3 mx-2">
      {data.data.map((item) => {
        const isActive = activeProductId === item.id;

        const itemInCart = cart.find((cartItem) => cartItem.id === item.id);
        const itemCount = itemInCart ? itemInCart.count : 0;

        return (
          <div key={item.id} className="flex p-4 text-center flex-col">
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-full mb-4 justify-center mx-auto"
            />
            <h3 className="font-bold text-sm text-[#8e03d0] text-right">
              {item.title}
            </h3>
            <p className="text-left text-[#eb62f5]">{item.price}</p>
            <div className="flex flex-col justify-center items-center">
              {!isActive ? (
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex gap-2 md:gap-6 flex-row items-center justify-between rounded-md p-2 md:px-3 cursor-pointer text-[#8e03d0] bg-[#F9F2FC] mt-3"
                >
                  <span>خرید محصول</span>
                  <FaCartShopping />
                </button>
              ) : (
                <div className="flex flex-row items-center gap-2 mt-3 justify-center">
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="w-7 h-7 bg-[#8e03d0] text-[#F9F2FC] rounded"
                  >
                    +
                  </button>
                  <span className="text-[#8e03d0]">{itemCount}</span>
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="w-7 h-7 text-[#8e03d0] bg-[#F9F2FC] rounded border-[2px] border-[#eb62f5] align-middle"
                  >
                    -
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

ProductItem.propTypes = {
  activeProductId: PropTypes.string,
  handleIncrease: PropTypes.func,
  handleDecrease: PropTypes.func,
  handleAddToCart: PropTypes.func,
  cart: PropTypes.array,
};
