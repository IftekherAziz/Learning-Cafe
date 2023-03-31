import React from "react";
import { useEffect, useState } from "react";

const Questions = () => {

  const [questions, setQuestions] = useState([]);

  /* Fetching the data from the questions.json file and setting the state of the questions. */
  useEffect(() => {
    fetch("./questions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div className="container my-5">
      <div className="bg-dark p-sm-2 p-md-5 rounded">
        <p className="fs-2 my-3 text-white text-center">
          Questions and Answers:
        </p>
        <div>
          {questions.map((question, key) => {
            return (
              <div
                className="bg-white p-5 m-4 rounded"
                key={question.id}
              >
                <p className="fw-bold fs-3">
                  {question.id}. {question.question}
                </p>
                <p className="fs-4">{question.answer} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Questions;
