import {LightEffectStyled} from "@components/LightEffect/LightEffect.styled.ts";
import React from "react";
import {MouseEffect} from "../../types/data.ts";

interface LightEffect extends MouseEffect{
}
export const LightEffect:React.FC<LightEffect>=({x,y,isHovered})=>{
	return <LightEffectStyled $left={x} $top={y} $isHovered={isHovered}></LightEffectStyled>
}
export default LightEffect