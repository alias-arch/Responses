import React, { useEffect, useState } from "react";
import Questions from "./Questions";

const Response = () => {
  const [responses, setResponses] = useState([]);
  const [questions, setQuestions] = useState([]);
  /*
  {
    id: 1,
      titre: "What is your name?",
        type: "short-answer",
    },
  {
    id: 2,
      titre: "What is your favorite color?",
        type: "multiple-choice",
          qcmValues: ["Red", "Blue", "Green"],
    },
  {
    id: 3,
      titre: "Which programming languages do you know?",
        type: "checkbox",
          qcmValues: ["JavaScript", "Python", "Java", "C++"],
    },
  ]);*/

  const fetchQuestions = async () => {
    const res = await fetch(`http://localhost:8080/api/Enquete/1/questions`);
    const data = await res.json();
    console.log(data);
    return data;
  };
  useEffect(() => {
    const getQuestions = async () => {
      const serverQuestions = await fetchQuestions();
      setQuestions(serverQuestions);
    }
    getQuestions();
  }, [])
  const handleQuestionResponse = (questionId, reponse) => {
    setResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      const existingResponseIndex = updatedResponses.findIndex(
        (reponse) => reponse.questionId === questionId
      );

      if (existingResponseIndex !== -1) {
        updatedResponses[existingResponseIndex] = { questionId, reponse };
      } else {
        updatedResponses.push({ questionId, reponse });
      }

      return updatedResponses;
    });
  };
  const saveResponses = async (reponses) => {
    const res = await fetch(`http://localhost:8080/api/responses/1/1/responses`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(reponses)
    })
    const data = res.json()
    console.log(data)
  }

  const submitResponses = (e) => {
    e.preventDefault();
    console.log("button pressed");
    console.log(responses);
    saveResponses(responses);

  }

  return (
    <form onSubmit={submitResponses}>
      <Questions Responses={responses} handleQuestionResponse={handleQuestionResponse} formQuestions={questions} />
      <input type="submit" value="Save response" />
    </form>

  )
}

export default Response
