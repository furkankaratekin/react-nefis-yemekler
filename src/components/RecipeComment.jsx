import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeComment = () => {
  const { recipeId } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUser(userData);

    // Fetch comments for the recipe
    fetchComments(recipeId);
  }, [recipeId]);

  const fetchComments = async (recipeId) => {
    try {
      const response = await axios.get(
        `https://nefisyemekler-clone-project.onrender.com/api/comment/list-comment/${recipeId}`
      );
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddComment();
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "https://nefisyemekler-clone-project.onrender.com/api/comment/add-comment",
        {
          recipe_id: recipeId,
          comment: newComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setComments([...comments, response.data]);
      setNewComment("");
      toast.success("Comment added successfully!");
    } catch (error) {
      console.error("Error adding comment:", error);
      toast.error("Failed to add comment");
    }
  };

  return (
    <div className="max-w-2xl p-4 md:ml-14 lg:ml-36">
      <ToastContainer />
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Add a Comment</h2>
        <div className="flex items-center space-x-4 mb-2">
          {user && (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src={user.profilePicture}
                alt={user.username}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          )}
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="flex-grow border border-gray-300 p-2 rounded-lg"
          />
          <button
            onClick={handleAddComment}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment._id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <img
                  src={comment.user_profile_picture}
                  alt={comment.user_username}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">{comment.user_username}</p>
                <p className="text-gray-500 text-sm">
                  {new Date(comment.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeComment;
