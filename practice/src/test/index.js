import { useState } from "react";
import Test from "./test";

function Show() {
  const [check, setCheck] = useState(false);

  const onChange = () => {
    setCheck((before) => !before);
  };

  return (
    <>
      <Test check={check} onChange={onChange} />
    </>
  );
}

export default Show;
