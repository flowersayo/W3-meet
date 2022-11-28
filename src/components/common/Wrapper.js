import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;

  border: 1px solid var(--border);

  /** 하위요소 absolute 속성값을 이용하기 위해 position: relative 로 설정 */
  position: relative;
  /* 그림자 효과 */
`;

export default Wrapper;
