import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './review.css';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main className='main-r'>
      <section className='container-r'>
        <div className='title-r'>
          <h2>Reviews</h2>
          <div className='underline-r'></div>
        </div>
        <article className='review-r'>
          <div className='img-container-r'>
            <img src={image} alt={name} className='person-img-r' />
            <span className='quote-icon-r'>
              <FaQuoteRight />
            </span>
          </div>
          <h4 className='author-r'>{name}</h4>
          <p className='job-r'>{job}</p>
          <p className='info-r'>{text}</p>
          <div className='button-container-r'>
            <button className='prev-btn-r' onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className='next-btn-r' onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className='random-btn-r' onClick={randomPerson}>
            Random
          </button>
        </article>
      </section>
    </main>
  );
};
export default Review;
