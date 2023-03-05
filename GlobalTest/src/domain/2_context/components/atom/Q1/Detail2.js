import { useContext } from "react";
import { ModalContext } from "../../../../../store/2_context";

const ContextQ1Detail2 = () => {
  const [isModalOpen, actions] = useContext(ModalContext);

  return (
    <>
      <h2>ContextQ1Detail2</h2>
      <button onClick={actions.show}>
        {isModalOpen ? "숨기기" : "보이기"}
      </button>
    </>
  );
};
export default ContextQ1Detail2;
