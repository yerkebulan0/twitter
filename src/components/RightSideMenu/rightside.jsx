import "../RightSideMenu/rightside.css";


export default function Rightside() {
 
  return (
    <div className="rs">
      <input placeholder="Search Twitter" className="search"></input>
      <div className="list">
        <p className="trend">Trends for you</p>
        <div className="news">
            <p>Trending in Kazakhstan</p>
            <b>Kaz</b>
            <p>6,430 Tweets</p>
        </div>
      </div>
    </div>
  );
}
