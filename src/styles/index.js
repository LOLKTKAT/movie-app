import styled, { themeProvider } from "styled-components";

export const StyledBoundry = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 3vw 0px 3vw;
  /* border: 1px solid red; */
`;

export const StyledContainer = styled.div`
  box-sizing: border-box;
  max-width: 1440px;
  margin-bottom: 32px;
`;
export const StyledContainerNoRightPadding = styled(StyledContainer)`
  /* padding: 1.6% 0 1.6% 6.5%; */
`;

export const StyledInput = styled.input`
  width: 180px;
  height: 36px;
  padding: 8%;
  border-radius: 30px;
  border: 1px solid hsl(100, 100%, 100%, 0.4);
  transition: 100ms ease-in-out;

  outline: none;
  &:focus {
    width: 200px;
    height: 36px;
  }
  @media only screen and (max-width: 950px) {
    width: 140px;
    height: 24px;
  }
  &:focus {
    width: 140px;
    height: 24px;
  }
`;

export const StyledButton = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 30px;
  font-size: 14px;
  border: none;
  font-weight: 700;
  transition: 120ms ease-in;
  &:hover {
    transform: translateY(-3px);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 55px;
    height: 20px;
    font-size: 7px;
  }
`;
export const StyledNextBtn = styled.button`
  width: 20px;
  height: 24px;
  border-radius: 30px;
  font-size: 14px;
  border: none;
  font-weight: 700;
  transition: 120ms ease-in;
  &:hover {
    transform: translateY(-3px);
    cursor: pointer;
  }
`;
