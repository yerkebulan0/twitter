import "../homemenu/home.css";
import Newt from "./newtwit";
import TweetsList from "./TweetList";
export default function Homemenu() {
  return (
    <div className="middle">
      <div className="home">Home</div>
      <Newt/>
      <TweetsList/> 
      
      
    </div>
  );
}
