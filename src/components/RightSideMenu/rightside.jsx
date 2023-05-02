import "../RightSideMenu/rightside.css";
import RightMenu from "./rightMenu";

export default function Rightside() {

 
 
  return (
    <div className="rs">
      <input placeholder="Search Twitter" className="search"></input>
      <div className="list">
        <p className="trend">Trends for you</p>
        <RightMenu/>
      </div>
    </div>
  );
}
