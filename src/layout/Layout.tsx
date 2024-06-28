import Header from "@components/Header/Header.tsx";
import React, {useRef, useState, useEffect} from "react";
import {LayoutStyled} from "@layout/Layout.styled.ts";

const Layout: React.FC = () => {
	const [position, setPosition] = useState({x: 0});
	const calculate = useRef(0);
	const innerWidth = useRef(window.innerWidth);
	
	const Shaker = (event:React.MouseEvent) => {
		calculate.current = event.clientX - (innerWidth.current / 2);
		setPosition({x: calculate.current});
	};
	
	useEffect(() => {
		const handleResize = () => {
			innerWidth.current = window.innerWidth;
		};
		
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	
	
	return (
		<LayoutStyled onMouseMove={Shaker} $position={position}>
			<Header/>
		</LayoutStyled>
	);
};

export default Layout;
