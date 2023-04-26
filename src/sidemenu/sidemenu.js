import { HomeIcon } from "../icons";
import "../sidemenu/sidemenu.css";
import {
  BOOKMARKS_SVG,
  EXPLORE_SVG,
  MESSAGES_SVG,
  NOTIFICATIONS_SVG,
} from "../svg";
import Menu from "./menu";
export default function Sidemenu() {
  const menu = [
    {
      icon: <HomeIcon />,
      name: "Home",
    },
    {
      icon: EXPLORE_SVG,
      name: "Explore",
    },
    {
      icon: NOTIFICATIONS_SVG,
      name: "Notifications",
    },
    {
      icon: MESSAGES_SVG,
      name: "Messages",
    },
    {
      icon: BOOKMARKS_SVG,
      name: "Bookmarks",
    },
  ];
  return (
    <div className="side">
      <div className="tw">
        <img className="img" src={require("../images/twitter.png")} />
      </div>
      {menu.map((item, index) => (
        <Menu item={item} key={index} />
      ))}
    </div>
  );
}
