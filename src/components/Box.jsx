import React from 'react';

const Box = () => {
  return (
    <section className="inline-block">
      <div className="w-48 border border-gray-300 p-2 m-2 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer">
        <h1 className="text-xl">Headline</h1>
        <h3 className="text-lg">Subheadline</h3>
        <p className="text-xs w-36 h-12 line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet
          minima ullam quia vero facere hic deserunt corrupti laboriosam, iusto
          libero molestias quidem quas a veritatis incidunt id praesentium quos.
        </p>
      </div>
    </section>
  );
};

export default Box;
