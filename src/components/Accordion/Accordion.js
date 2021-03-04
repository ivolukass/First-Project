import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import './accordion.css';

const Accordion = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main className='main-a'>
      <div className='container-a'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </section>
      </div>
    </main>
  );
};
export default Accordion;
