import { FaCartShopping } from "react-icons/fa6";

export default function Button(activeButton, handleActive) {
  return (
    <button
      onClick={() => handleActive("cart")}
      className={`flex gap-2 md:gap-6 flex-row items-center justify-between rounded-md p-2 md:px-3 cursor-pointer ${
        activeButton === "cart" ? "bg-[#8e03d0]" : "bg-[#F9F2FC]"
      }`}
    >
      <span
        className={` font-bold text-center ${
          activeButton === "cart" ? "text-[#F9F2FC]" : "text-[#8e03d0]"
        }`}
      >
        سبد خرید
      </span>
      <FaCartShopping
        className={` w-5 h-5 ${
          activeButton === "cart" ? "text-[#F9F2FC]" : "text-[#8e03d0]"
        }`}
      />
    </button>
  );
}
