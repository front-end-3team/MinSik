import { useState } from "react";
import MoveToA from "./moveToA";
import MoveToB from "./moveToB";

function Move() {
  const [move, setMove] = useState(true);

  const onMove = () => {
    setMove((prev) => !prev);
  };

  return (
    <>
      <button onClick={onMove}>A로 이동</button>
      <button onClick={onMove}>B로 이동</button>
      <div>{move ? <MoveToB /> : <MoveToA />}</div>
    </>
  );
}

export default Move;
