import React from 'react';

function FontLink({ text, link }) {
  return (
    <a href={link} 
      className="underline decoration-2 decoration-slate-800 hover:decoration-pink-700" target="_blank" 
      rel="noopener noreferrer">
      {text}
    </a>
  );
}

export default FontLink;
