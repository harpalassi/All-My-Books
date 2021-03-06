import React from "react";
import Button from "./Button";

// Book component which displays each book and its details

const Book = props => {
  console.log(props);
  return (
    <div className="book">
      <h6 className="book-title">{props.title}</h6>
      <span className="book-authors">{props.authors}</span>
      <div className="book-details">
        {props.thumbnail ? (
          <img className="book-img" src={props.thumbnail} alt={props.title} />
        ) : (
          <img
            className="book-img"
            src="https://books.google.com/googlebooks/images/no_cover_thumb.gif"
            alt="no-thumbnail"
          />
        )}{" "}
        {props.description ? (
          <span className="book-text">{props.description}</span>
        ) : (
          <span className="book-text">No description provided.</span>
        )}
      </div>
      <div className="book-btn">
        <a
          href={props.link}
          className="waves-effect waves-light btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
        {!props.saveBook ? (
          <Button id={props.id} onClick={props.deleteBook}>
            Delete
          </Button>
        ) : (
          <Button onClick={props.saveBook}>Save</Button>
        )}
      </div>
    </div>
  );
};

export default Book;
