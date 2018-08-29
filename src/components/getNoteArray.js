import NOTE_ARRAY from './noteArray';

export default function getNoteArray(openNote) {
  const firstNoteIndex = NOTE_ARRAY.indexOf(openNote);
  return NOTE_ARRAY.slice(firstNoteIndex + 1).concat(NOTE_ARRAY.slice(0, firstNoteIndex + 1));
}
