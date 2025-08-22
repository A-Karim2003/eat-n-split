import "./friend.css";
import Friend from "./Friend";
import Button from "../Button";
import AddFriend from "./AddFriend";

import { useState } from "react";

function Friends({
  selectedPersonId,
  setSelectedPersonId,
  setFriends,
  friends,
}) {
  const maxId = Math.max(...friends.map((friend) => friend.id)) + 1;

  const [name, setName] = useState("");
  const [image, setImage] = useState(`https://i.pravatar.cc/150?img=${maxId}`);

  function validateInputs() {
    if (!name) {
      alert("Please provide a name");
      return false;
    }

    if (!image) {
      const proceed = confirm(
        "No image was provided. Do you want to add this friend without an image?"
      );

      if (!proceed) return false;
    }
    return true;
  }

  function handleAddFriend() {
    if (validateInputs()) {
      addFriend(name);
      setName("");
      setImage("");
    }
  }

  function handleSelectedId(id) {
    setSelectedPersonId(id);
  }

  function addFriend(name) {
    const newFriend = {
      id: maxId,
      profilePic: `https://i.pravatar.cc/150?img=${maxId}`,
      name: name,
      amount: 0,
    };

    setFriends((friends) => {
      setImage(`https://i.pravatar.cc/150?img=${maxId}`);
      return [...friends, newFriend];
    });
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

      <AddFriend
        name={name}
        image={image}
        setName={setName}
        setImage={setImage}
        onHandleAddFriend={handleAddFriend}
      />

      {/* prettier-ignore */}
      <Button className={"add-friend-btn"}>
        Add friend
      </Button>
    </div>
  );
}

export default Friends;
