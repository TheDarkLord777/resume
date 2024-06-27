import styled from "styled-components";

export const LightEffectStyled = styled.div.attrs(props => ({
	style: {
		top: `${props.$top}px`,
		left: `${props.$left}px`,
		opacity: props.$isHovered ? 1 : 0,
	},
}))`
    position: absolute;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s, transform 0.3s;
`;
