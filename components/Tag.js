const bg = {
  'default': 'bg-gray-200 font-bold p-1 rounded',
  'red': 'bg-red-200 font-bold p-1 rounded',
  'orange': 'bg-orange-200 font-bold p-1 rounded',
  'yellow': 'bg-yellow-200 font-bold p-1 rounded',
  'green': 'bg-green-200 font-bold p-1 rounded',
  'teal': 'bg-teal-200 font-bold p-1 rounded',
  'blue': 'bg-blue-200 font-bold p-1 rounded',
  'indigo': 'bg-indigo-200 font-bold p-1 rounded',
  'purple': 'bg-purple-200 font-bold p-1 rounded',
  'pink': 'bg-pink-200 font-bold p-1 rounded',
  'gray': 'bg-gray-200 font-bold p-1 rounded',
}

const Tag = (props) => {
  return (
    <span className={bg[props.color]}>
      {props.content}
    </span>
  )
}

export default Tag;