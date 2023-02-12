function ExampleList({ studyMembers, onSleep }) {
  return studyMembers.map((member) => (
    <div>
      {member.id}. {member.name}
      <button onClick={() => onSleep(member.id)}>꿈나라로~</button>
    </div>
  ));
}

export default ExampleList;
