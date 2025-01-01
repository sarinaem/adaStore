import PropTypes from "prop-types";

export default function CartPage({
  cart = { cart },
  handleIncrease,
  handleDecrease,
}) {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="flex flex-col max-w-3xl w-full border border-[#8e03d0] rounded-lg p-4 shadow">
        {cart.length > 0 ? (
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col flex-grow-0 items-center gap-2">
              {cart.map((item) => (
                <div
                  className="flex flex-row flex-grow-0 items-center gap-20 w-full"
                  key={item.id}
                >
                  <div className="flex flex-row gap-2 items-center my-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-24 h-24 object-contain"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-[#8e03d0] font-bold">{item.title}</h3>
                      <p className="text-[#939090] text-right">{item.price}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-evenly">
                    <p className="text-[#eb62f5] font-semibold text-center">
                      {/* {item.price} * {item.count} تومان */}
                      {(parseInt(item.price) * parseInt(item.count)).toFixed(
                        6
                      )}{" "}
                      تومان
                    </p>
                    <div className="flex flex-row items-center gap-2 mt-3 text-right">
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="w-7 h-7 bg-[#8e03d0] text-[#F9F2FC] rounded"
                      >
                        +
                      </button>
                      <span className="text-[#8e03d0]">{item.count}</span>
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="w-7 h-7 text-[#8e03d0] bg-[#F9F2FC] rounded border-[2px] border-[#eb62f5] align-middle"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          "سبد خرید خالی است"
        )}
      </div>
    </div>
  );
}

CartPage.propTypes = {
  cart: PropTypes.array.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
};
