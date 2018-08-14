import React from 'react';

import Fret from './Fret';

class GuitarString extends React.Component {
  render() {
    const noteArray = [
      'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb'
    ];
    return (
      <div className="guitarStringContainer" >
        <div className="guitarString">
          {Object.values(noteArray).map(note => {
            return <Fret key={note} note={note} />;
          })}
        </div>
      </div>
    );
  }
}

export default GuitarString;
