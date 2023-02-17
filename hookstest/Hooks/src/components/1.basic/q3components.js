import { useEffect } from "react";

function Q3components({ setCount }) {
  useEffect(() => {
    const ropeClock = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(ropeClock);
      setCount(0);
    };
  }, []);

  return (
    <>
      <div> 🏃‍♂️ 줄넘기 ... ing </div>
    </>
  );
}
export default Q3components;
