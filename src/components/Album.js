import React from "react";
import Data from "../Data/Data";
import { v4 as uuid_v4 } from "uuid";

console.log(uuid_v4());
export default function Album() {
  return (
    <div className="grid md:grid-cols-3">
      {Data.map((item) => {
        return (
          <div className="mb-8 pb-8 px-5 border border-b-9" key={item.id}>
            <div className="flex justify-center items-center text-xl font-mono p-2 overflow-hidden">
              {/* {item.title} */}
            </div>
            <div className="flex text-lg font-mono p-4">
              {/* Descriptiasdfasdfasdfgasdfasdgasd asdf ad afdas asdfasd on */}
            </div>
            <img className="" src={item.imgSrc} alt="" />
          </div>
        );
      })}
    </div>
  );
}
