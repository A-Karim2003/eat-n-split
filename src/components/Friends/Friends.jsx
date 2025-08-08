import "./friend.css";
import Friend from "./Friend";
import Button from "../Button";

function Friends() {
  return (
    <div className="friends">
      <Friend />
      <Friend />
      <Friend />

      {/* prettier-ignore */}
      <Button className={"add-friend-btn"}>
        Add friend
      </Button>
    </div>
  );
}

export default Friends;
