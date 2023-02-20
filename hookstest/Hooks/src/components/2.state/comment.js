import styled from "styled-components";

function Comment({ Comments, onRemoveComment, onEditComment }) {
  return Comments.map((comment) => (
    <S.CommentItem>
      <p>
        작성자: <span>{comment.User.nickname}</span>
      </p>
      <p>
        댓글 내용: <span>{comment.content}</span>
      </p>
      <button onClick={() => onEditComment(comment.myComment)}>수정</button>
      <button onClick={onRemoveComment}>삭제</button>
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
