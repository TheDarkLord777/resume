import styled, {css} from "styled-components";

export const ThemeStyled = styled.div`
    position: relative;
    max-width: 150px;
    height: 30px;
    width: 100%;
    border-radius: 30px;
    box-shadow: 1px 2px 2px silver;
    padding: 4px;
    cursor: pointer;
`
export const ThemeCircle = styled.div<{ $theme: string }>`
    border-radius: 30px;
    position: absolute;
    left: 4px;
    bottom: 4px;
    width: 22px;
    height: 22px;
    cursor: default;
    box-shadow: 0 0 30px white;
    transition-duration: 0.3s;
    ${props => props.$theme === "light" ? css`
        background: transparent;
        filter: contrast(2);
    ` : css`background: transparent;
        left: calc(100% - 26px)`}
    
`