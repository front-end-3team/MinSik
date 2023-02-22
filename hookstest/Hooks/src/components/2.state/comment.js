import { useState } from "react";
import styled from "styled-components";

function Comment({
  Comments,
  onRemoveComment,
  onStartEdit,
  onEditBtn,
  onEditDoneBtn,
}) {
  const [edit, setEdit] = useState("");

  const onInputEdit = (event) => {
    setEdit(event.target.value);
  };

  return Comments.map((comment) => (
    <S.CommentItem>
      <p>
        작성자: <span>{comment.User.nickname}</span>
      </p>
      {comment.isEdit ? (
        <p>
          댓글 내용: <input onChange={onInputEdit} />
          <button
            onClick={() => {
              onEditDoneBtn(comment.id, comment.myComment);
              onStartEdit(comment.id, comment.myComment, edit);
            }}
          >
            수정완료
          </button>
        </p>
      ) : (
        <p>
          댓글 내용: <span>{comment.content}</span>
        </p>
      )}
      {
        <button onClick={() => onEditBtn(comment.id, comment.myComment)}>
          수정
        </button>
      }
      <button onClick={() => onRemoveComment(comment.id, comment.myComment)}>
        삭제
      </button>
    </S.CommentItem>
  ));
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
