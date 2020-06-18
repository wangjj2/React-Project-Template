import React from 'react';
import { AppContainer, SpacedBox } from './style';
import TitleWidget from './Components/TitleWidget';
import SearchableList from './Components/SearchableList';
import { Col } from './Components/GridStyleObjects';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';

const App = () => {
    return (
        <div className="container-fluid">
            <AppContainer>
                <TitleWidget />
                <SearchBar />
                <SearchableList category="history" title="Work Experience" />
                <SearchableList category="education" title="Education and Training" />
                <SearchableList category="projects" title="Personal Projects" />
                <SearchableList category="skills" title="Skill Summary" />
                <SearchableList category="interests" title="Notable Interests" />
                <SpacedBox justification="center">
                    <Col tablet={2}>References Available on request</Col>
                </SpacedBox>
                <Footer />
            </AppContainer>
        </div>
    );
}

export default App;
