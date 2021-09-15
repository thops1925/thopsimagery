import React from 'react';
// import Card from '../components/Card';
import photo from '../Data/Data';

export default function Gallery() {
  return (
    <>
      {photo.map((photo, index) => {
        return (
          <div className="flex flex-col items-center justify-center pt-4 text-center">
            <p className=" font-bold text-3xl text-gray-900 pb-4">
              {photo.title}
            </p>

            <div
              key="index"
              className="flex flex-wrap overflow-hidden md:-mx-px xl:-mx-1 md:px-20 "
            >
              {photo.photo.map((file) => {
                return (
                  <img
                    className="md:w-1/3 overflow-hidden md:my-px md:px-px xl:my-1 xl:px-1 object-cover"
                    key="index"
                    src={file}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
