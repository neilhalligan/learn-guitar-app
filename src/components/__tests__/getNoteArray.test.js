import getNoteArray from 'components/getNoteArray';

describe('getNoteArray', () => {
  it('should return array beginning with open note', () => {
    const noteArray = [
      'F#/Gb', 'F', 'E', 'D#/Eb', 'D', 'C#/Db', 'C', 'B', 'A#/Bb', 'A', 'G#/Ab', 'G'
    ];
    expect(getNoteArray('G')).toEqual(noteArray);
  });
});
