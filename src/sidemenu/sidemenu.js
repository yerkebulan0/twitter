import "../sidemenu/sidemenu.css";
import { BOOKMARKS_SVG, EXPLORE_SVG, HOME_SVG, MESSAGES_SVG, NOTIFICATIONS_SVG } from "../svg";
export default function Sidemenu() {
    const menu = [
        {
            icon:HOME_SVG,
            name:'Home'
        },
        {
            icon:EXPLORE_SVG,
            name:'Explore'
        },
        {
            icon:NOTIFICATIONS_SVG,
            name:'Notifications'
        },
        {
            icon:MESSAGES_SVG,
            name:'Messages'
        },
        {
            icon:BOOKMARKS_SVG,
            name:'Bookmarks'
        }
    ]
  return (
    <div className="w-25">
      <img className="img" src={require("../images/twitter.png")} />
        {menu.map((item,index)=>(
            <div className="block">
            <div className="svg">{item.icon}</div>
            <p className="p">{item.name}</p>
          </div>
        ))}
      
    </div>
  ); 
}
