import React, {useState } from "react";
import Blogs from "../Blogs/Blogs";
import Sidebar from "../Sidebar/Sidebar";

const Body = () => {

  const [readTime, setReadTime] = useState(0);
  const [bookmarksCounter, setBookmarksCounter] = useState(0);
  const [blogTitles, setBlogTitles] = useState([]);

/**
 * The function handlerReadTime takes in a parameter time and sets the state of readTime to the value
 * of readTime plus time.
 */
  const handlerReadTime = (time) => {
    setReadTime(readTime + time);
  };

  /**
   * The handlerBookmarks function takes in a blogTitle as an argument and then sets the
   * bookmarksCounter state to the current value of bookmarksCounter plus 1 and then sets the
   * blogTitles state to the current value of blogTitles plus the blogTitle argument.
   */
  const handlerBookmarks = (blogTitle) => {
    setBookmarksCounter(bookmarksCounter + 1);
    setBlogTitles([...blogTitles, blogTitle]);
  };
  return (
    <div className="container-sm">
      <div className="row">
        <Blogs
          handlerReadTime={handlerReadTime}
          handlerBookmarks={handlerBookmarks}
          blogTitles={blogTitles}
        ></Blogs>
        <Sidebar
          readTime={readTime}
          blogTitles={blogTitles}
          bookmarksCounter={bookmarksCounter}
        ></Sidebar>
      </div>
    </div>
  );
};

export default Body;
