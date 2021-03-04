import React, { useState, useEffect } from 'react';
import Loading from '../Cocktails/Loading';
import TourList from './TourList';
import './tours.css';
const url = 'https://course-api.com/react-tours-project';
const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <main className='main-t'>
        <div className='title'>
          <h2>No more tours</h2>
          <button className='btn' onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className='main-t'>
      <TourList tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default Tours;
