export function Text({ text }) {
  if (!text) {
    return null;
  }
  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value
    return (
      <span
        key={index}
        className={[
          bold ? 'font-bold' : '',
          code ? 'text-sm px-1 text-sky-500 dark:text-sky-400 bg-sky-300/20 dark:bg-sky-800/30 rounded' : '',
          italic ? 'italic' : '',
          strikethrough ? 'line-through' : '',
          underline ? 'underline' : '',
          'font-mono',
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? (
          <a href={text.link.url} target="_blank" rel="noopener noreferrer">
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  })
}