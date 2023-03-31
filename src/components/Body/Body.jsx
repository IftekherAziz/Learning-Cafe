import Blogs from "../Blogs/Blogs";
import Sidebar from "../Sidebar/Sidebar";

const Body = () => {

  return (
    <div className="container-sm">
      <div className="row">
        <Blogs></Blogs>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Body;
