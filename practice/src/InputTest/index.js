import { useState } from "react";
import Input from "./input";

function InputTest() {
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
  };

  const clearText = () => {
    setText("");
  };

  return (
    <>
      <Input text={text} changeText={changeText} clearText={clearText} />
    </>
  );
}

export default InputTest;
