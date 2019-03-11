import React from 'react'
import styled from '../theme/theme';
import backgroundImg from '../assets/img/Mask Group 1.png'

const AppHeaderContainer = styled.header`
    width: 100%;
    height: 130px;
    background: url('${backgroundImg}') no-repeat 0 0 fixed; 
    background-size: 100% 130px;
    box-shadow: 0px 3px 6px ${props => props.theme.shadowColor};
    
`

export const AppHeader = () => {
    return(
        <AppHeaderContainer></AppHeaderContainer>
    )
}