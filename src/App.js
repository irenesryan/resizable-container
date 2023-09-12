import React, { useState } from 'react';
import './App.css';

function App() {
  const [initialPos,   setInitialPos] = useState(null);
    const [initialSize, setInitialSize] = useState(null);

  const initial = (e) => {
    let resizable = document.getElementById('Resizable');
    console.log(resizable)

    setInitialPos(e.clientX);
    setInitialSize(resizable.offsetWidth);
  }

  const resize = (e) => {
    let resizable = document.getElementById('Resizable');

    resizable.style.width = `${parseInt(initialSize) + parseInt(e.clientX - initialPos)}px`;
  }

  return (
    <div className="Block">
      <div id='Resizable'/>
      <div id='Draggable' draggable='true' onDragStart={initial} onDrag={resize}/>
    </div>
  );
}
export default App;
