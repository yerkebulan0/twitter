import "../homemenu/home.css";
import Newt from "./newtwit";
import Tweet from "./Tweet";
import TweetsList from "./Tweet";
export default function Homemenu() {
  return (
    <div className="middle">
      <div className="home">Home</div>
      <Newt/>
      <TweetsList/> 
      
      
    </div>
  );
}
