import ContextQ2Form2 from "./Form2";

const ContextQ2Form = ({ onAddUser, onAddStatus }) => {
  const onAddUserList = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const nickname = e.target.nickname.value;

    onAddUser(name, nickname);
  };

  return (
    <div>
      <h1>Q2Form</h1>
      <form onSubmit={onAddUserList}>
        <label>
          <input type="text" name="name" placeholder="name" />
        </label>
        <label>
          <input type="text" name="nickname" placeholder="nick-name" />
        </label>
        <button type="submit">추가</button>
      </form>
      <ContextQ2Form2 onAddStatus={onAddStatus} />
    </div>
  );
};
export default ContextQ2Form;
