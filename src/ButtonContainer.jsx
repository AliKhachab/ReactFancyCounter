import CountButton from "./CountButton";

export default function CountButtons({ setCount }) {

  return (
    <div className="button-container">
      <CountButton type={"minus"} setCount={setCount} />
      <CountButton type={"plus"} setCount={setCount}/>
    </div>
  );
}
