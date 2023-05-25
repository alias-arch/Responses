import ShortAnswerQuestion from "./ShortAnswerQuestion.js"
import MultipleChoiceQuestion from "./MultipleChoiceQuestion.js"
import CheckboxQuestion from "./CheckboxQuestion.js"
import { useState } from "react"
const Question = (props) => {
  const [reponse, setRespone] = useState('');
  //const [selectedOption, setSelectedOptions] = useState([])
  const handleResponseChange = (event, id) => {
    const response = event.target.value;
    setRespone(response);
    props.handleQuestionResponse(id, response);
  };
  const renderQuestion = (question) => {
    const { id, titre, type, qcmValues } = question;
    switch (type) {
      case "short_answer":
        return (
          <ShortAnswerQuestion
            key={props.question.id}
            id={props.question.id}
            question={titre}
            value={reponse}
            onChange={handleResponseChange}
          />
        );
      case "multiple_choice":
        return (
          <MultipleChoiceQuestion
            key={props.question.id}
            id={props.question.id}
            question={titre}
            options={qcmValues}
            selectedOption={reponse}
            onChange={handleResponseChange}
          />
        );
      case "checkbox":
        return (
          <CheckboxQuestion
            key={props.question.id}
            id={props.question.id}
            question={titre}
            options={qcmValues}
            selectedOptions={reponse}
            onChange={handleResponseChange}
          />
        );
      default:
        return null;
    }
  }
  return (
    <div>
      {renderQuestion(props.question)}
    </div>
  )
}

export default Question;
