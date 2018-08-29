import React from 'react';
import NOTE_ARRAY from './noteArray';
import MenuItem from './MenuItem';

const MenuList = () => {
  return (
    <div className="menu-list">
      {Object.values(NOTE_ARRAY.slice().reverse()).map(note => {
        return <MenuItem key={'M' + note} note={note} />;
      })}
    </div>
  );
};

export default MenuList;
