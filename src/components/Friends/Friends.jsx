import "./friend.css";
import Friend from "./Friend";
import Button from "../Button";

import AddFriend from "./AddFriend";

function Friends({
  selectedPersonId,
  setSelectedPersonId,
  friends,
  addFriend,
}) {
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

      <AddFriend />

      {/* prettier-ignore */}
      <Button className={"add-friend-btn"}>
        Add friend
      </Button>
    </div>
  );
}

export default Friends;

//! on
