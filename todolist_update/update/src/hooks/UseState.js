import { useRef, useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const HTMLColor = useRef();

  const onAdd = () => {
    setCount(count + 1);
  };
  const onSub = () => {
    setCount(count - 1);
  };
  if (count > 0) {
    HTMLColor.current.style.color = "red";
  }
  if (count < 0) {
    HTMLColor.current.style.color = "blue";
  }

  return (
    <>
      <p>양수면 빨간색, 음수면 파란색</p>
      <button onClick={onAdd}>+</button>
      <span ref={HTMLColor}>{count} </span>
      <button onClick={onSub}>-</button>
    </>
  );
}

export default UseState;
