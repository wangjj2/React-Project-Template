import styled from 'styled-components';
import { Col, Row } from './Components/GridStyleObjects'

export const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  color: white;
  padding-bottom: 150px;
`;
export const BorderedWidget = styled(Col)`
    border-radius: 3px;
    border: 2px solid;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 15px;
    width: 90%;
    background: ${(props) => props.background};
    color: ${(props) => props.color};
`;

export const SpacedBox = styled(Row)`
    margin: 15px;
`;

export const Header = styled.header`
    font-size: calc(16px + 2vmin);
`
export const NameHeader = styled.header`
    font-size: calc(16px + 5vmin);
    font-family: fantasy;
`

export const Title = styled.header`
    font-size: 18px;
    font-weight: 600;
`

export const Subtitle = styled.header`
    font-size: 14px;
    font-weight: 200;
`

export const Date = styled.header`
    font-size: 18px;
    font-weight: 600;
`
export const StyledSearchBar = styled.input`
    width: 100%;
`

export const FooterBox = styled.a`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: white;
    color: black;
    padding: 10px;
    text-align: center;
    border: silver 3px solid;
`

export const LinkLookalike = styled.span`
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
`