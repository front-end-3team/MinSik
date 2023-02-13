function Input({ id, password, changeText, clearText }) {
  return (
    <>
      <input name="id" placeholder="id" onChange={changeText} value={id} />
      <input
        name="password"
        placeholder="password"
        onChange={changeText}
        value={password}
      />
      <button onClick={clearText}>초기화</button>
      <div>
        <p>Id: {id}</p>
        <p>PassWord: {password}</p>
      </div>
    </>
  );
}

export default Input;
