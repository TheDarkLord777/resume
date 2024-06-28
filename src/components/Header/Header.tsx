import React, {useEffect, useState} from "react";
import {HeaderLogo, HeaderStyled} from "@components/Header/Header.styled.ts";
import Theme from "@components/Theme/Theme.tsx";
import LightEffect from "@components/LightEffect/LightEffect.tsx";

const Header: React.FC = () => {
	const [theme, setTheme] = useState<string>("light")
	const [isHovered, setIsHovered] = useState(false);
	const [position, setPosition] = useState({x: 0, y: 0})
	
	const MouseEntering = () => {
		setIsHovered(true)
	}
	const MouseLeaving = () => {
		setIsHovered(false)
	}
	const MouseMoving = (event:React.MouseEvent) => {
		setPosition({x: event.clientX, y: event.clientY})
	}
	useEffect(() => {
		
		document.getElementById("root")!.className = theme
	}, [theme])
	
	return <HeaderStyled onMouseEnter={MouseEntering} onMouseMove={MouseMoving} onMouseLeave={MouseLeaving}>
		{theme==="dark" && <LightEffect x={position.x} y={position.y} isHovered={isHovered}/>}
		<HeaderLogo $theme={theme}/>
		<Theme setTheme={setTheme}  theme={theme}/>
	</HeaderStyled>
}
export default Header