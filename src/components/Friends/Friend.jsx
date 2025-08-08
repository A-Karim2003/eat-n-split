import "./friend.css";
import Button from "../Button";

function Friend() {
  return (
    <div className="friend">
      <div className="profile-pic"></div>
      <div className="profile-info"></div>
      <Button className={"close-btn"}>Close</Button>
    </div>
  );
}

export default Friend;
