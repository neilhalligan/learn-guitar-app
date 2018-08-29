import React from 'react';
import Guitar from './Guitar';
import MenuList from './MenuList';

class App extends React.Component {
  render() {
    return (
      <div>
        <MenuList />
        <Guitar />
      </div>
    );
  }
}

export default App;
