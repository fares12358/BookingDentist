import React from "react";

const Comment = (props) => {
  const totalStars = props.rating;

  return (
    <>
      <div className="overflow-hidden bg-transparent rounded-md shadow-my ">
        <div className="px-5 py-6">
          <div className="flex items-center justify-between ">
            <div className="min-w-0 ml-3 mr-auto">
              {/* props.name */}
              <p className="text-base font-semibold text-cyan-500">
                {props.name}
              </p>
            </div>
          </div>
          {/* props.msg */}
          <blockquote className="mt-5">
            <p className="text-base text-gray-100">{props.msg}</p>
          </blockquote>
        </div>
        {/* props.rating */}
        <div className="flex items-center justify-center py-4">
          {Array.from({ length: totalStars }, (_, index) => (
            <span
              key={index}
              className="text-2xl cursor-pointer transition-colors text-yellow-400
              "
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comment;
