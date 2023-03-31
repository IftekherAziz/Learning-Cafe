import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Sidebar from '../Sidebar/Sidebar';

const Body = () => {
  const [readTime, setReadTime] = useState(0);
  const [bookmarksCounter, setBookmarksCounter] = useState(0);
  const [blogTitles, setBlogTitles] = useState([]);
  
  const handlerReadTime = (time) => {
    setReadTime(readTime + time);
  }
  const handlerBookmarks = (blogTitle) => {
    setBookmarksCounter(bookmarksCounter + 1);
    setBlogTitles([...blogTitles, blogTitle]);
  }
  return (
    <div className='container-sm'>
      <div className='row'>
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