import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
export default function CountButton({ type, setCount, locked }) {
  const handleClick = (type) => {
    if (type === "plus") {
      setCount((prev) => {
        const newCount = prev + 1;
        return newCount > 5 ? 5 : newCount; // return 5 if newCount is greater than 5 else return newCount
      });
    } else {
      setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };
  return (
    <button
      disabled={locked}
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
