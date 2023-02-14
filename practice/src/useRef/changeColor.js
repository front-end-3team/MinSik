function ChangeColor({ onBuy, money, minusColor }) {
  return (
    <>
      <h1>통장 잔고</h1>
      <button onClick={onBuy}>지출</button>
      <div ref={minusColor}>{money}원</div>
    </>
  );
}

export default ChangeColor;
