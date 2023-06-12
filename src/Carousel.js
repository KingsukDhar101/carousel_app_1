import React, { useState, useEffect } from 'react';

export default function Carousel() {
  const initalState = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
    { id: 5, name: 'E' },
  ];
  const [data, setData] = useState(initalState);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e) => {
    if (currentIndex == data?.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((curr) => curr + 1);
    }
  };
  const handlePrev = (e) => {
    if (currentIndex == 0) {
      setCurrentIndex(data?.length - 1);
    } else {
      setCurrentIndex((curr) => curr - 1);
    }
  };

  useEffect(()=>{
    const timer = setInterval(()=>{
      handleNext();
    },2000);
    return clearInterval(timer);
  },[currentIndex]);

  return (
    <div className="carousel_container">
      <h3 className="">Carousel App</h3>
      <div className="carousel_box">
        <button onClick={handlePrev}>Prev</button>
        <div className="image_box">{data[currentIndex]?.name}</div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
