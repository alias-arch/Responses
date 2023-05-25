import Question from "./Question.js"
import { v4 as uuidv4 } from 'uuid';
const Questions = (props) => {
  return (
    <div>
      {props.formQuestions.map((question, index) => (<Question key={question.id} handleQuestionResponse={props.handleQuestionResponse} response={props.Responses[index]} question={question} />))}
    </div>
  )
}

export default Questions;
