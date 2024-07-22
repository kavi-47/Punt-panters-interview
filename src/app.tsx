import React from 'react';
import Editor from './components/Editor';
import { GlobalStyle } from './styles';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Editor />
    </div>
  );
}

export default App;
