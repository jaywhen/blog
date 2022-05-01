const Tag = (props) => {
  return (
    <span className={`bg-${props.color}-400 font-bold p-1 rounded`}>
      {props.content}
    </span>
  )
}

export default Tag;