const commonStyle = 'font-medium text-sm py-1 px-2 rounded';
const bg = {
  'default': `bg-gray-200 ${commonStyle}`,
  'green': `bg-green-200 ${commonStyle}`,
  'blue': `bg-blue-200 ${commonStyle}`,
  'purple': `bg-purple-200 ${commonStyle}`,
  'gray': `bg-gray-200 ${commonStyle}`,
  'brown': `bg-stone-200 ${commonStyle}`,
};

const Tag = (props) => {
  return (
    <span className={bg[props.color]}>
      {props.content}
    </span>
  )
}

export default Tag;