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
  const [name, setName] = useState("");
  const [image, setImage] = useState(
    `https://i.pravatar.cc/150?img=${
      Math.max(...friends.map((friend) => friend.id)) + 1
    }`
  );

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
    if (!validateInputs()) return;

    addFriend(name);
    setName("");
  }

  function handleSelectedId(id) {
    setSelectedPersonId(id);
  }

  function addFriend(name) {
    const nextId = Math.max(...friends.map((friend) => friend.id)) + 1;
    const newImage = `https://i.pravatar.cc/150?img=${nextId + 1}`;

    const newFriend = {
      id: nextId,
      profilePic: image || `https://i.pravatar.cc/150?img=${1}`,
      name: name,
      amount: 0,
    };

    setFriends((friends) => [...friends, newFriend]);
    setImage(newImage);
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
