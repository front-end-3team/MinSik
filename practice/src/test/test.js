function Test({ check, onChange }) {
  return (
    <>
      <button onClick={onChange}>check</button>
      {check ? <h1>Good</h1> : <h1>Bad</h1>}
    </>
  );
}

export default Test;
