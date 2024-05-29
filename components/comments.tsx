"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FaComment } from "react-icons/fa";

interface Comment {
  _id: string;
  content: string;
  date: string;
  time: string;
}

const Projects = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newComment, setNewComment] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const commentsPerPage: number = 5;
  const maxPaginationButtons: number = 5;

  useEffect(() => {
    fetch("/api/comments/fetch")
      .then((response) => response.json())
      .then((data: Comment[]) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  const filteredComments = comments.filter((comment) =>
    comment.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages: number = Math.ceil(
    filteredComments.length / commentsPerPage
  );

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  const handlePreviousPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const renderPageButtons = (): JSX.Element[] => {
    const activePageIndex: number = currentPage - 1;
    const pageButtons: JSX.Element[] = [];

    if (totalPages <= maxPaginationButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
          <button
            key={i}
            onClick={() => paginate(i)}
            className={`mr-2 px-4 py-2 rounded-lg shadow-md ${
              currentPage === i
                ? "bg-[#2e2e2e] text-white"
                : "bg-[#3a3a3b] text-gray-200 hover:bg-[#2e2e2e] hover:text-white"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      const halfMaxButtons: number = Math.floor(maxPaginationButtons / 2);
      let startPageIndex: number = activePageIndex - halfMaxButtons;
      let endPageIndex: number = activePageIndex + halfMaxButtons;

      if (startPageIndex < 0) {
        startPageIndex = 0;
        endPageIndex = maxPaginationButtons - 1;
      } else if (endPageIndex >= totalPages) {
        endPageIndex = totalPages - 1;
        startPageIndex = endPageIndex - (maxPaginationButtons - 1);
      }

      for (let i = startPageIndex; i <= endPageIndex; i++) {
        pageButtons.push(
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`mr-2 px-4 py-2 rounded-lg shadow-md ${
              currentPage === i + 1
                ? "bg-[#2e2e2e] text-white"
                : "bg-[#3a3a3b] text-gray-200 hover:bg-[#2e2e2e] hover:text-white"
            }`}
          >
            {i + 1}
          </button>
        );
      }
    }

    return pageButtons;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      const opts: RequestInit = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: newComment,
          date: new Date(),
          time: new Date().toLocaleTimeString(),
        }),
      };

      fetch("/api/comments/new", opts)
        .then((response) => response.json())

        .catch((error) => console.error("Error posting comment:", error));

      setNewComment("");
      return alert("Comment posted!");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setNewComment(e.target.value);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-[#060507] w-full md:max-w-[70%] rounded-3xl overflow-hidden px-36 py-8 border border-zinc-800">
        <div className="flex items-center text-3xl font-semibold leading-tight mb-4 text-white">
          <span>Comments</span>
          <FaComment className="text-indigo-500 ml-2" />
        </div>
        <p className="text-lg md:text-xl text-gray-200 mb-8 text-left">
          Here you can leave a comment and view other comments.
        </p>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-full mb-4 px-4 py-2 rounded-lg border border-zinc-800 bg-[#101013] text-gray-400 focus:outline-none"
          placeholder="Search comments..."
        />
        <div className="mb-8">
          {filteredComments
            .slice(
              (currentPage - 1) * commentsPerPage,
              currentPage * commentsPerPage
            )
            .map((comment: Comment) => (
              <div
                key={comment._id}
                className="bg-[#101013] border border-zinc-800 rounded-xl p-6 mb-4"
              >
                <p className="text-gray-300 text-center">{comment.content}</p>
                <p className="text-gray-400 text-center mt-2">
                  {comment.date} at {comment.time}
                </p>
              </div>
            ))}
        </div>
        <div className="flex justify-center mb-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="mr-2 px-4 py-2 rounded-lg shadow-md  text-gray-200 bg-[#3a3a3b] hover:bg-[#2e2e2e] hover:text-white"
          >
            Previous
          </button>
          {renderPageButtons()}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="ml-2 px-4 py-2 rounded-lg shadow-md text-gray-200 bg-[#3a3a3b] hover:bg-[#2e2e2e] hover:text-white"
          >
            Next
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            value={newComment}
            onChange={handleInputChange}
            className="w-full h-32 px-4 py-2 rounded-lg border border-zinc-800 bg-[#101013] text-gray-400 resize-none focus:outline-none"
            placeholder="Add your comment..."
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-[#3a3a3b] hover:bg-[#2e2e2e] text-white font-semibold py-2 px-4 rounded-lg shadow-md inline-block"
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Projects;
