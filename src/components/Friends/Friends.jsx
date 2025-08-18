import "./friend.css";
import Friend from "./Friend";
import Button from "../Button";
import { useState } from "react";

function Friends({ friendsData, selectedPersonId, setSelectedPersonId }) {
  const [friends, setFriends] = useState(friendsData);

  function handleFriends(id, newAmount) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === id ? { ...friend, amount: newAmount } : friends
      )
    );
  }

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
          onHandleFriend={handleFriends}
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
