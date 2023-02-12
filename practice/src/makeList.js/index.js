import { useState } from "react";
import ExampleList from "./exampleList";

function MakeList() {
  const [studyMembers, setStudyMembers] = useState([
    {
      id: 1,
      name: "박선영",
    },
    {
      id: 2,
      name: "조아연",
    },
    {
      id: 3,
      name: "김태기",
    },
    {
      id: 4,
      name: "김민식",
    },
  ]);

  const onSleep = (id) => {
    const newStudyMemebers = studyMembers.filter((member) => member.id !== id);
    setStudyMembers(newStudyMemebers);
  };

  return (
    <>
      <ExampleList studyMembers={studyMembers} onSleep={onSleep} />
    </>
  );
}

export default MakeList;
