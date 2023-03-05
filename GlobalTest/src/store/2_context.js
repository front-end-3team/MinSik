import { createContext, useMemo, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const action = useMemo(
    () => ({
      show() {
        setIsModalOpen((prev) => !prev);
      },
    }),
    []
  );

  const value = useMemo(() => [isModalOpen, action]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
