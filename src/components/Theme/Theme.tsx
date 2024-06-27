import {ThemeCircle, ThemeStyled} from "@components/Theme/Theme.styled.ts";
import React from "react";
import {setStates} from "@types/data.ts";
import {Moon, Sun1} from "iconsax-react";


interface ThemeProps extends setStates {
	setTheme: setStates,
	theme: string
}


export const Theme: React.FC<ThemeProps> = ({setTheme, theme}) => {
	
	const ToggleTheme = () => {
		theme === "light" ? setTheme("dark") : setTheme("light")
		
	}
	return <ThemeStyled onClick={ToggleTheme}><ThemeCircle $theme={theme}>
		{theme === "light" ? <Sun1 size="22" color="#e47200" variant={"Bold"}/>:<Moon size="22" color="white" variant={"Bold"}/>}
	</ThemeCircle> </ThemeStyled>
}
export default Theme