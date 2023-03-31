import React, { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blogs = () => {
  
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="col-md-8">
      {blogs.map((blog) => (
        <SingleBlog blog={blog} key={blog.id}></SingleBlog>
      ))}
    </div>
  );
};

export default Blogs;
