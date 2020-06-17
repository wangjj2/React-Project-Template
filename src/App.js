import React from 'react';
import { AppContainer } from './style';
import TitleWidget from './Components/TitleWidget';
import SearchableList from './Components/SearchableList';

const App = () => {
    return (
        <div className="container-fluid">
            <AppContainer>
                <TitleWidget />
                <SearchableList category="history" title="Work Experience" />
                <SearchableList category="education" title="Education and Training" />
            </AppContainer>
        </div>
    );
}

export default App;
