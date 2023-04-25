import "../homemenu/home.css";
import Newt from "./newtwit";
import Tweetslist from "./Tweet";
export default function Homemenu() {
  return (
    <div className="middle">
      <div className="home">Home</div>
      <Newt/>
      <Tweetslist/>
    </div>
  );
}
