import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import NoteList from '../NoteList/NoteList';
import NoteField from '../NoteField/NoteField';
import db from '../../db.json';

function Notes() {
  const dataNotes = db.todolist;
  const [notes, setNotes] = React.useState(dataNotes);

  function addNote(inputValue) {
    if (inputValue) {
      let object = {
        id: uuidv4(),
        text: inputValue,
        complete: false,
      };
      setNotes([object, ...notes]);
    };
  };

  function removeNote(id) {
    setNotes([...notes.filter(function (elem) {
      if (elem.id !== id) {
        return elem;
      };
      return setNotes([elem, ...notes]);
    })]);
  };

  function toggleComplete(index) {
    setNotes(function (notes) {
      return notes.map(function (elem, curIdx) {
        if (index === curIdx) {
          return {
            ...elem,
            complete: !elem.complete,
          };
        };
        return elem;
      });
    });
  };

  return (
    <div className="notes">
      <div className="container">
        <div className="notes__wrapper">
          <h1 className="notes__title">Количество задач: {notes.length}</h1>
          <NoteField addNote={addNote} />
          {notes.map(function (item, index) {
            return (
              <NoteList
                key={index}
                index={index}
                id={item.id}
                text={item.text}
                complete={item.complete}
                removeNote={removeNote}
                toggleComplete={toggleComplete}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;