import styled from 'styled-components';
import { Col } from './Components/GridStyleObjects'

export const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  color: white;
`;
export const BorderedWidget = styled(Col)`
    border-radius: 3px;
    border: 2px solid;
    padding-top: 10px;
    padding-bottom: 10px;
`;
export const Header = styled.header`
    font-size: calc(16px + 2vmin);
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