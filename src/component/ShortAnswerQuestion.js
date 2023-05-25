const ShortAnswerQuestion = (props) => {
  return (
    <>
      <p>{props.question}</p>
      <input type="text" value={props.value} onChange={(e) => { props.onChange(e, props.id) }} />
    </>

  )
}

export default ShortAnswerQuestion
