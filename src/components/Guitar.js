import React from 'react';
import GuitarString from './GuitarString';

const Guitar = () => {
  return (
    <div>
      <GuitarString stringNo={'1'} openNote={'E'} />
      <GuitarString stringNo={'2'} openNote={'A'} />
      <GuitarString stringNo={'3'} openNote={'D'} />
      <GuitarString stringNo={'4'} openNote={'G'} />
      <GuitarString stringNo={'5'} openNote={'B'} />
      <GuitarString stringNo={'6'} openNote={'E'} />
    </div>
  );
};

export default Guitar;
