import styled, { css } from '../theme/theme';
import React, { ReactNode, FC } from 'react';

type Props = {
    children: ReactNode|string;
    type: string;
}
const cssInjector = (fontSize : number, fontWeight : number, color?: string, toUpper?: boolean, border?: boolean) => {
    return css`
        text-transform: ${toUpper ? 'uppercase' : 'none'};
        color: ${color};
        font-size: ${fontSize}em;
        font-weight: ${fontWeight};
        border-bottom: ${border ? `1px solid ${color}` : 'none'};
        `  
}
const StyledLabel = styled("p")<{type: string}>`
    text-align: left;
    margin: 0 0 0 15px;
    padding: 2px;
    width: 80%;
    color: ${props => props.theme.primaryColor};
    ${({type, theme}) => {
        switch(type) {
            case "name": return cssInjector(0.95, 500, theme.alternativeColor, true);
            case "description": return cssInjector(1.65, 400); 
            case "temperature": return cssInjector(2.45, 700, theme.primaryColor, undefined, true); 
            case "details": return cssInjector(0.95, 500); 
            case "error": return cssInjector(2, 700, theme.alternativeColor)
            default : return cssInjector(1, 400);  
            }
        }
    }
`;
export const Label : FC<Props> = ({ children, type }) => (
    <StyledLabel type={type}>{children}</StyledLabel>
)