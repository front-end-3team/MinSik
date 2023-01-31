import * as S from "../style";

function Login() {
  return (
    <form>
      <span>이메일</span>
      <S.InputBox>
        <input placeholder="e-mail" />
      </S.InputBox>
      <span>비밀번호</span>
      <S.InputBox>
        <input placeholder="password" type="password" />
      </S.InputBox>
      <button>로그인</button>
      <div>계정이 없으시나요?</div>
    </form>
  );
}

export default Login;
