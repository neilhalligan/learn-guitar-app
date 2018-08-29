import React from 'react';
import getNoteArray from 'components/getNoteArray';
import Fret from './Fret';

const GuitarString = (props) => {
  const fretValues = getNoteArray(props.openNote);
  return (
    <div className="guitarString">
      {Object.values(fretValues).map(fretValue => {
        return <Fret
          key={props.stringNo + fretValue}
          note={fretValue}
          fretPosition={props.stringNo + fretValue}
        />;
      })}
    </div>
  );
};

export default GuitarString;
