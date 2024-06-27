import {LightEffectStyled} from "@components/LightEffect/LightEffect.styled.ts";
import React from "react";
import {MouseEffect} from "@types/data.ts";

export const LightEffect:React.FC<MouseEffect>=(props)=>{
	return <LightEffectStyled $left={props.x} $top={props.y} $isHovered={props.isHovered}></LightEffectStyled>
}
export default LightEffect