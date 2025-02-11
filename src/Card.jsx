import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";
import Count from "./Count";

export default function Card() {
  return (
    <div>
      <Title />
      <Count />
      <ResetButton />
      <CountButtons />
    </div>
  )
}
