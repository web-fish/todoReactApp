import React from 'react';

function NoteField({ addNote }) {
  const [inputValue, setInputValue] = React.useState('');

  function getInputValue(e) {
    setInputValue(e.currentTarget.value);
  };

  function addNoteFromPlus() {
    addNote(inputValue);
    setInputValue('');
  };

  function addNoteFromEnter(e) {
    if (e.key === 'Enter') {
      addNote(inputValue);
      setInputValue('');
    };
  };

  return (
    <div className="notefield">
      <div className="notefield__wrapper">
        <input
          className="notefield__input"
          type="text"
          placeholder="Добавить новую задачу"
          value={inputValue}
          onChange={getInputValue}
          onKeyPress={addNoteFromEnter}
        />
        <button onClick={addNoteFromPlus}
          className="notefield__add">
          <svg height="29px" viewBox="0 0 512 512" width="29px" fill="#11c05f" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" /><path d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" /><path d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0" /></svg>
        </button>
      </div>
    </div>
  );
};

export default NoteField;





