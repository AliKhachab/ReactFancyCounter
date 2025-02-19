import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
export default function CountButton({ type, setCount }) {
  const handleClick = (type) => {
    if (type === "plus") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };
  return (
    <button
      className="count-btn"
      onClick={() => {
        handleClick(type);
      }}
    >
      {type === "plus" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
