import { useState } from "react";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  const [lists, setLists] = useState(PlayListMock.playlist);

  const [inputs, setInputs] = useState({
    title: "",
    signer: "",
  });

  const { title, signer } = inputs;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onAddMusic = () => {
    const list = {
      title,
      signer,
    };

    setLists([...lists, list]);

    setInputs({
      title: "",
      signer: "",
    });
  };

  const onRemoveMusic = (title) => {
    setLists(lists.filter((list) => list.title !== title));
  };

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {lists.map((v) => (
          <li>
            <h3>{v.title}</h3>
            <p>{v.signer}</p>
            <button
              onClick={() => {
                onRemoveMusic(v.title);
              }}
            >
              삭제
            </button>
            <hr></hr>
          </li>
        ))}
      </ul>
      <div>
        <p>
          곡명 : <input name="title" value={title} onChange={onInputChange} />
        </p>
        <p>
          가수/작곡 :
          <input name="signer" value={signer} onChange={onInputChange} />
        </p>
        <p>
          <button onClick={onAddMusic}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
