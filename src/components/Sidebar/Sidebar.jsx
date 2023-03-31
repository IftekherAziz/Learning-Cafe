import React from 'react';
import './Sidebar.css'

const Sidebar = ({ readTime, blogTitles, bookmarksCounter }) => {
  return (
    <div className="blogs col-md-4">
      <div className="spendTime text-center">
        <p className="py-3 fs-4 fw-bolder">
          Spent time on read: <span className="fw-bolder">{readTime}</span>{" "}
        </p>
      </div>
      <div className="bookmarks p-sm-2 p-md-3">
        <p className="mx-1 fs-4 fw-bolder">
          Bookmarked Blogs :
          <span className="fw-bolder"> {bookmarksCounter}</span>{" "}
        </p>
        <div className="bookmarks-blogs row row-col-1 gap-2 mx-1">
          {blogTitles.map((blogTitle, index) => {
            return (
              <div className="blogs-title" key={index}>
                <div className="blogs-title fs-5 fw-bolder">
                  <p>{blogTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;