import "./friend.css";
import Friend from "./Friend";
import Button from "../Button";
import { useState } from "react";

function Friends({ friendsData, selectedPersonId, setSelectedPersonId }) {
  const [friend, setfriend] = useState(friendsData);

  function handleFriends() {}

  function handleSelectedId(id) {
    setSelectedPersonId(id);
  }

  return (
    <div className="friends">
      {friendsData.map((friend) => (
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
