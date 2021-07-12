import React from 'react';
import './scss/index.scss';

import NoteHeader from './Components/NoteHeader/NoteHeader';
import Notes from './Components/Notes/Notes';

function App() {

  return (
    <div className="app">
      <NoteHeader />
      <Notes />
    </div>
  );
};

export default App;

