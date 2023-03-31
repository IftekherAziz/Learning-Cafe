import React from "react";
import "./SingleBlog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleBlog = ({blog}) => {
  
  /* Destructuring the props. */
  const {author_name,blog_title,blog_image,author_image,read_time,published_date} = blog;

  return (
    <div>
      <div className="mb-4 single-blog">
        <img
          src={blog_image}
          className="card-img-top img-fluid object-fit-cover border rounded"
          style={{ height: "50vh" }}
          alt="..."
        />
        <div className="card-body">
          <div className="author d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
              <div className="author-picture">
                <img
                  src={author_image}
                  className="card-img-top rounded-circle img-fluid"
                  alt="asif"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div className="author-info d-flex flex-column">
                <div className="author-name card-text fw-bolder fs-5">
                  <p>{author_name}</p>
                </div>
                <div className="release-date card-text">
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {published_date}
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="reading-time">
              <p className="card-text">
                <small className="text-body-secondary">
                  <span>{read_time}</span> mins read{" "}
                </small>
                <span>
                  <FontAwesomeIcon icon={faBookmark} />
                </span>{" "}
              </p>
            </div>
          </div>
          <h5 className="card-title fs-2 fw-bold my-3">{blog_title}</h5>
          <div className="my-3">
            <a href="#">
              Mark as read
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SingleBlog;
