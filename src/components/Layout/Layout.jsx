import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import "./Layout.scss";

function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          &lt;html&gt;
          <br />
          <span className="top-tag-body">&lt;body&gt;</span>
        </span>
        <Outlet />
        <span className="tags bottom-tags">
          <span className="bottom-tag-body">&lt;/body&gt;</span>
          <br />
          &lt;/html&gt;
        </span>
      </div>
    </div>
  );
}

export default Layout;
