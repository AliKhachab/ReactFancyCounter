import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

export default function CountButtons({ setCount }) {
  return (
    <div className="button-container">
      <button
        className="count-btn"
        onClick={() => {
          setCount((prev) => prev > 0 ? prev - 1 : 0);
        }}
      >
        <MinusIcon className="count-btn-icon" />
      </button>
      <button
        className="count-btn"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
