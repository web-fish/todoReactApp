import React from 'react';

const NoteHeader = () => {
  let today = new Date().toLocaleDateString();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <h1 className="header__title">Список задач на сегодня, {today}</h1>
        </div>
      </div>
    </header>
  );
};

export default NoteHeader;