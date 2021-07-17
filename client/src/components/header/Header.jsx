import "./header.css";
import banner from "./1423.jpg"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">..My personal Blog site..</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src={banner}
        alt=""
      />
    </div>
  );
}
