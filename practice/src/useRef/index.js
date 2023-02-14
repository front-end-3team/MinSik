import { useRef, useState } from "react";
import ChangeColor from "./changeColor";

function UseRef() {
  const [money, setMoney] = useState(100);
  const minusColor = useRef();

  const onBuy = () => {
    setMoney(money - 10);
    minusColor.current.style.color = "red";
  };

  return (
    <>
      <ChangeColor money={money} onBuy={onBuy} minusColor={minusColor} />
    </>
  );
}

export default UseRef;
