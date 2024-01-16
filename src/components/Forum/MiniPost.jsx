import React from "react";
import { FaComment } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const MiniPost = () => {
  return (
    <div className="MiniPost">
      <div className="sth">
        <h2>Ahmed Mallek</h2>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
        {/* MainTopic */}
        <h3>posted since 2 days</h3>
        <h3>sth sth sth sth sth ...</h3>
      </div>
      <div className="bouttonez">
      <button>
        <FaComment />
      </button>
      <button>
        <FaHeart />
      </button>
      <button>
        <BsThreeDotsVertical />
      </button>
      </div>
      
    </div>
  );
};

export default MiniPost;
