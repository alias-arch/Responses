
const CheckboxQuestion = (props) => {
  console.log(props.selectedOptions)
  return (
    <>
      <p>{props.question}</p>
      {props.options.map((option) => (
        <label key={option}>
          <input type="checkbox" value={option} onChange={(e) => { props.onChange(e, props.id) }} />
          {option}
        </label>
      ))}
    </>

  )
}

export default CheckboxQuestion
