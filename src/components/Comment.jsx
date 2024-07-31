import React, { useState } from "react";

const Comment = (props) => {
  const [rating, setRating] = useState(0);
  const totalStars = 5;

  const handleClick = (index) => {
    setRating(index);
  };

  return (
    <>
      <div className="overflow-hidden bg-transparent rounded-md shadow-my ">
        <div className="px-5 py-6">
          <div className="flex items-center justify-between ">
            <div className="min-w-0 ml-3 mr-auto">
              {/* props.name */}
              <p className="text-base font-semibold text-cyan-500">
                Darrell Steward
              </p>
            </div>
          </div>
          {/* props.msg */}
          <blockquote className="mt-5">
            <p className="text-base text-gray-100">
              You made it so simple. My new site is so much faster and easier to
              work with than my old site. I just choose the page, make the
              change and click save.
            </p>
          </blockquote>
        </div>
        {/* props.rating */}
        <div className="flex items-center justify-center py-4">
          {Array.from({ length: totalStars }, (_, index) => (
            <span
              key={index}
              className={`text-2xl cursor-pointer transition-colors ${
                index < rating ? "text-yellow-400" : "text-gray-400"
              }`}
              onClick={() => handleClick(index + 1)}
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
