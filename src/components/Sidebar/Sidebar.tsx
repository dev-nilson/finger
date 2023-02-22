import Match from "../Match/Match";
import MenuFillIcon from "remixicon-react/MenuFillIcon";
import { characters } from "../../utils/data";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="toggle">
        <div>
          <MenuFillIcon size={30} />
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar__header">
          <h1>Finger</h1>
        </div>
        <div className="sidebar__subheader">
          <h3>Matches</h3>
          <div className="sidebar__counter">3</div>
        </div>
        <div className="sidebar__matches">
          {characters.map((match) => (
            <Match image={match.url} name={match.name} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
