import styled from "styled-components";
import { FlexCenter } from "Styles/Common";

export const InputBox = styled.div`
  ${FlexCenter}

  & input {
    width: 100%;
    height: 100%;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    text-align: center;
  }
`;
