import { HomeIcon } from "../icons/index.js";
import { Second_svg } from "../images/svg.js";
import { Th_svg } from "../images/svg.js";
import { Fr_svg } from "../images/svg.js";
import { Fif_svg } from "../images/svg.js";
import { Six_svg } from "../images/svg.js";

export default function Newt() {
  return (
    <div className="newt">
      <div className="placeHolder">
        <img className="img2" src={require("../homemenu/img2.JPG")} />
        <input className="input" placeholder="What's happening?" />
      </div>
      <div className="bottomMenu">
        <div><HomeIcon /></div>
        <div>{Second_svg}</div>
        <div> {Th_svg}</div>
        <div>{Fr_svg}</div>
        <div>{Fif_svg}</div>
        <div>{Six_svg}</div>
        <button>Tweet</button>
      </div>
    </div>
  );
}
