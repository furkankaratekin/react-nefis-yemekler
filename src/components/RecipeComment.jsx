import React, { useState } from "react";

const RecipeComment = () => {
  const [comments, setComments] = useState([
    { name: "John Doe", time: "2 hours ago", text: "This recipe is amazing!" },
    {
      name: "Alice Smith",
      time: "1 day ago",
      text: "I tried this and my family loved it!",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("New comment:", newComment);
      // Optionally, add the new comment to the comments list
      // setComments([...comments, { name: "Anonymous", time: "Just now", text: newComment }]);
      setNewComment("");
    }
  };

  const handleButtonClick = () => {
    console.log("New comment:", newComment);
    // Optionally, add the new comment to the comments list
    // setComments([...comments, { name: "Anonymous", time: "Just now", text: newComment }]);
    setNewComment("");
  };

  return (
    <div className="max-w-2xl p-4 md:ml-14 lg:ml-36">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Add a Comment</h2>
        <div className="flex items-center space-x-4 mb-2">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-500">A</span>
          </div>
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="flex-grow border border-gray-300 p-2 rounded-lg"
          />
          <button
            onClick={handleButtonClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-500">
                  {comment.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold">{comment.name}</p>
                <p className="text-gray-500 text-sm">{comment.time}</p>
              </div>
            </div>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeComment;
