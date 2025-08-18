import "./friend.css";
import Friend from "./Friend";
import Button from "../Button";

function Friends({ selectedPersonId, setSelectedPersonId, friends }) {
  function handleSelectedId(id) {
    setSelectedPersonId(id);
  }

  return (
    <div className="friends">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          {...friend}
          handleSelectedId={handleSelectedId}
          isSelected={selectedPersonId === friend.id}
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
