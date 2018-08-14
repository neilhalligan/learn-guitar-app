import React from 'react';
import GuitarString from './GuitarString';

class App extends React.Component {
  render() {
    return (
      <div>
        <GuitarString stringNo={1} openNote={'E'}/>
      </div>
    );
  }
}

export default App;
