import styled from "styled-components";

interface LayoutStyled {
	$position: { x: number }
}

export const LayoutStyled = styled.div.attrs<LayoutStyled>(({$position}) => ({
	style: {
		backgroundPositionX: `${$position.x / 100}px`
	}
}))<LayoutStyled>`
    background: var(--background) no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    padding: 10px;
`;
