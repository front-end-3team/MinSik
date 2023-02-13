function Input({ text, changeText, clearText }) {
  return (
    <>
      <input onChange={changeText} value={text} />
      <button onClick={clearText}>초기화</button>
      <div>
        <p>Input의 값: {text}</p>
      </div>
    </>
  );
}

export default Input;
