import Match from "../Match/Match";
import "./Sidebar.css";

type SidebarProps = {
  characters: Character[];
};

function Sidebar({ characters }: SidebarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Finger</h1>
      </div>
      <div className="sidebar__subheader">
        <h3>Matches</h3>
        <div className="sidebar__counter">0</div>
      </div>
      <div className="sidebar__matches">
        {characters.map((character) => (
          <Match
            key={character.id}
            image={character.url}
            name={character.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
