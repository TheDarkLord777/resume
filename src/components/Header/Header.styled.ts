import styled, {css, keyframes} from "styled-components";



const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`

export const HeaderStyled = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    max-width: 1440px;
    width: calc(100% - 20px);
    height: 80px;
    border-radius: 10px;
    padding: 0 36px;
    background: var(--white-dark);
    justify-content: space-between;
    overflow: hidden;
`
export const HeaderLogo = styled.div<{ $theme: string }>`
    width: 120px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    ${props => props.$theme === "light" ? css`
                background-image: url("../../assets/logo_changed.png")`
            : css`
                background-image: url("../../assets/test.png");
                animation: ${rotateAnimation} 1s linear infinite;
      `}
`
