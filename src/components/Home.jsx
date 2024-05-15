import React from 'react';
import Box from  "./Box.jsx";


const Home = () => {
  const sectionsCount = 12;

  return (
    <div className="flex flex-wrap">
      {[...Array(sectionsCount)].map((_, index) => (
        <Box key={index} />
      ))}
    </div>
  );
};

export default Home;
