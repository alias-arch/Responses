
const MultipleChoiceQuestion = (props) => {
  return (
    <>
      <p>{props.question}</p>
      {props.options.map((option) => (
        <label key={option}>
          <input type="radio" name="multiple-choice" value={option} onChange={(e) => { props.onChange(e, props.id) }} />
          {option}
        </label>
      ))}
    </>

  )
}

export default MultipleChoiceQuestion
