import styled from "styled-components";

export const LayoutStyled = styled.div.attrs(props => ({
	style: {
		backgroundPositionX: `${props.$position.x/100}px`
	}
}))`
  background: var(--background) no-repeat;
		background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  padding: 10px;
`;
