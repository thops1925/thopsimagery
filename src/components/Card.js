import React from "react";

function Card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-10">
      <img src="https://source.unsplash.com/random" alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-800 text-xl mb-2">
          <p>Title</p>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
