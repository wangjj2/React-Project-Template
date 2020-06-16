import React from 'react';
import { AppContainer, BorderedWidget } from './style';
import { Row } from './Components/GridStyleObjects'
import TitleWidget from './Components/TitleWidget';

const App = () => {
    return (
        <div className="container-fluid">
            <AppContainer>
                <TitleWidget />
                <Row justification='center'>
                    <BorderedWidget>
                        test
                    </BorderedWidget>
                </Row>
            </AppContainer>
        </div>
    );
}

export default App;
