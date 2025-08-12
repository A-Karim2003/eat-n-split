import "./friend.css";
import Friend from "./Friend";
import Button from "../Button";

function Friends({ friendsData }) {
  return (
    <div className="friends">
      {friendsData.map((friend) => (
        <Friend
          key={friend.id}
          id={friend.id}
          profilePic={friend.profilePic}
          name={friend.name}
          amount={friend.amount}
        />
      ))}
      {/* prettier-ignore */}
      <Button className={"add-friend-btn"}>
        Add friend
      </Button>
    </div>
  );
}

export default Friends;
