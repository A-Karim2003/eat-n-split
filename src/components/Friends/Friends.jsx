import "./friend.css";
import Friend from "./Friend";
import Button from "../Button";

import AddFriend from "./AddFriend";

function Friends({
  selectedPersonId,
  setSelectedPersonId,
  setFriends,
  friends,
}) {
  function handleSelectedId(id) {
    setSelectedPersonId(id);
  }

  const maxId = Math.max(...friends.map((friend) => friend.id));

  function addFriend(name) {
    const newFriend = {
      id: maxId + 1,
      profilePic: `https://i.pravatar.cc/150?img=${maxId + 1}`,
      name: name,
      amount: 0,
    };

    setFriends((friends) => [...friends, newFriend]);
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

      <AddFriend addFriend={addFriend} />

      {/* prettier-ignore */}
      <Button className={"add-friend-btn"}>
        Add friend
      </Button>
    </div>
  );
}

export default Friends;
