import { useState } from "react";
import Input from "./input";

function InputTest() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const { id, password } = inputs;

  const changeText = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearText = () => {
    setInputs({
      id: "",
      password: "",
    });
  };

  return (
    <>
      <Input
        id={id}
        password={password}
        changeText={changeText}
        clearText={clearText}
      />
    </>
  );
}

export default InputTest;
