import styled from 'styled-components';
import {Col} from './Components/GridStyleObjects'

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