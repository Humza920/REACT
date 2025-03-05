import React from "react";

function Cards({
  image,
  title,
  username,
  date,
  description,
  onButtonClick,
  editBtn,
  deleteBtn,
  button,
  onEditBtn,
  onDeleteBtn,
}) {
  return (
    <>
      <div className="max-w-3xl m-5  p-7 shadow-2xl rounded-3xl">
        {/* User Image and Title Side by Side  */}
        <div className="flex">
          <div className="w-20 h-20 rounded-md overflow-hidden border-2 border-grey-900">
            <img src={image} alt="User" className="object-cover w-full" />
          </div>
          {/* Title */}
          <div className="ml-4">
            <h2 className="text-xl font-bold">{title}</h2>
            {/* Username and Date */}
            <div className="text-md text-gray-600">
              <span className="font-medium">{username}</span> •{" "}
              <span>{date}</span>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="mt-8 text-xl">
          <p>{description}</p>
        </div>
        <div className="mt-5">
          <button
            onClick={onButtonClick}
            className="text-white btn btn-primary"
          >
            {button}
          </button>
          <button onClick={onEditBtn} className="pl-6 text-primary">
            {editBtn}
          </button>
          <button onClick={onDeleteBtn} className="pl-6 text-primary">
            {deleteBtn}
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
