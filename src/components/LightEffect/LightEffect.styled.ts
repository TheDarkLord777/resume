import styled from "styled-components";
interface LightEffectStyled{
	$top:number,
	$left:number,
	$isHovered:boolean
}

export const LightEffectStyled = styled.div.attrs<LightEffectStyled>(({$top,$left,$isHovered}) => ({
	style: {
		top: `${$top}px`,
		left: `${$left}px`,
		opacity: `${$isHovered ? 1 : 0}`,
	},
}))<LightEffectStyled>`
    position: absolute;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s, transform 0.3s;
`;
