import { HomeIcon } from "../icons/index.js";
import { IconFig } from "../icons/index.js";
import { Trird } from "../icons/index.js";
import { Four } from "../icons/index.js";
import { Fif } from "../icons/index.js";
import { Si } from "../icons/index.js";

export default function Newt() {
  return (
    <div className="newt">
      <div className="placeHolder">
        <img className="img2" src={require("../homemenu/img2.JPG")} />
        <input className="input" placeholder="What's happening?" />
      </div>
      <div className="bottomMenu">
        <div><HomeIcon /></div>
        <div><IconFig/></div>
        <div> <Trird/>  </div>
        <div><Four/></div>
        <div><Fif/></div>
        <div><Si/></div>
        <button>Tweet</button>
      </div>
    </div>
  );
}
