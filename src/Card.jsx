import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";
import Count from "./Count";
import './index.css';
import { useEffect, useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        setCount((prev) => (prev < 5 ? prev + 1 : 5));
      } else if (event.code === "ArrowDown") {
         setCount((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (event.key === "r") {
        setCount(0);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
      
      //clean up function
      return () => window.removeEventListener("keydown", handleKeyDown);

  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  )
}
