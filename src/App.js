import React from 'react';
import Container from '@material-ui/core/Container';
import DefinitionDisplay from "./components/DefinitionDisplay";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Container maxWidth="md">
        <SearchBar />
        <DefinitionDisplay />
    </Container>
  );
}

export default App;