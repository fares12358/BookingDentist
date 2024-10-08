import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Booking from "../components/Booking";
import Comment from "../components/Comment";
import { useAuth } from "../components/AuthContext";

const Home = () => {
  const commentRef = useRef();
  const ratingRef = useRef();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const { isloged } = useAuth();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [isSend, setIsSend] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/comments")
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, [isSend]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSend("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [isSend]);

  const handleCommentChange = () => {
    setComment(commentRef.current.value);
  };

  const handleRatingChange = () => {
    setRating(Number(ratingRef.current.value));
  };

  const addComment = (e) => {
    e.preventDefault();
    if (isloged) {
      if (comment.trim() === "" || rating === 0) {
        setIsSend("Please fill in all fields.");
        return;
      }

      const data = {
        name: user.name, // Replace "a7a" with user name or "Anonymous"
        msg: comment,
        rating: rating,
      };
      post(data);
    } else {
      setIsSend("login to enable your comment");
    }
  };

  function post(data) {
    fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        setIsSend("Comment sent successfully!");
        clearInputs();
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
        setIsSend("Failed to send comment. Please try again.");
      });
  }

  const clearInputs = () => {
    setComment("");
    setRating(0);
    commentRef.current.value = "";
    ratingRef.current.value = 0;
  };

  const getStart = () => {
    navigate("/sign");
  };

  return (
    <>
      <Nav />
      <section className="container mx-auto max-w-7xl py-10 mt-5 md:mt-20">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="text-holder flex flex-col justify-center items-center text-center order-2 md:order-1">
            <p className="uppercase text-gray-400 font-bold md:py-5 py-2 text-xs md:text-xl">
              we use latest medical technology
            </p>
            <h1 className="md:text-5xl text-xl font-bold text-gray-100 md:my-8 my-5 uppercase">
              Let Us Brighten Your Smile
            </h1>
            {!isloged && (
              <button
                className="text-gray-100 bg-cyan-800 max-w-96 md:px-8 md:py-3 py-2 px-5 md:rounded-xl rounded-md font-bold text-xs md:text-xl uppercase my-5"
                onClick={getStart}
              >
                get start
              </button>
            )}
          </div>
          <div className="img-holder p-5 flex justify-center items-center order-1 md:order-2">
            <img
              className="img-fluid rounded-3xl"
              src={require("../images/main.jpg")}
              alt="not found"
            />
          </div>
        </div>
      </section>
      <section className="booking container mx-auto max-w-7xl py-10 mt-5 md:mt-20">
        <h1 className="text-center sm:text-4xl md:text-5xl text-xl text-cyan-500 font-bold uppercase md:my-20 my-5">
          Get Your Appointment
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="img-holder flex justify-center items-center m-5">
            <img
              className="img-fluid"
              src={require("../images/book.jpg")}
              alt=""
            />
          </div>
          <div className="book-holder p-5 flex justify-center items-center">
            <Booking />
          </div>
        </div>
      </section>
      <div className="max-w-2xl mx-auto text-center my-20">
        <h2 className="text-[24px] font-bold text-cyan-500 sm:text-4xl md:text-5xl">
          What our customers say
        </h2>
        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-400 p-2">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis.
        </p>
      </div>
      <section className="comment container mx-auto max-w-7xl py-10 mt-5 md:mt-20 max-h-[800px] overflow-hidden overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8  px-5 justify-around md:gap-10 gap-5">
          {comments.length > 0 ? (
            comments.map((ele) => (
              <Comment
                key={ele.id}
                name={ele.name}
                msg={ele.msg}
                rating={ele.rating}
              />
            ))
          ) : (
            <p>No Comments</p>
          )}
        </div>
      </section>
      <section className="addCom container mx-auto max-w-7xl py-10 flex justify-center items-center">
        <form
          className="bg-transparent p-6 rounded-lg  text-center"
          onSubmit={addComment}
        >
          <div className="mb-4">
            <p className="text-green-600 font-medium text-center w-full my-5">
              {isSend}
            </p>
            <label
              htmlFor="comment"
              className="block text-white text-md md:text-xl font-bold mb-2"
            >
              Add A Comment
            </label>
            <textarea
              id="comment"
              ref={commentRef}
              value={comment}
              onChange={handleCommentChange}
              className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:shadow-outline bg-gray-900"
              rows="5"
              cols="40"
              placeholder="Write your comment here"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-white text-md md:text-xl font-bold mb-2"
            >
              Rating
            </label>
            <select
              id="rating"
              ref={ratingRef}
              value={rating}
              onChange={handleRatingChange}
              className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:shadow-outline bg-gray-900"
            >
              <option value={0}>Select a rating</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Star{num > 1 && "s"}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-cyan-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Home;
