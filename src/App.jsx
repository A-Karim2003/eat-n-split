import { useState } from "react";
import BillSplitter from "./components/BillSplitter/BillSplitter.jsx";
import Friends from "./components/Friends/Friends.jsx";

const friendsData = [
  {
    id: 1,
    profilePic: "https://i.pravatar.cc/150?img=12",
    name: "Clark",
    amount: -7,
  },
  {
    id: 2,
    profilePic: "https://i.pravatar.cc/150?img=47",
    name: "Sarah",
    amount: 20,
  },
  {
    id: 3,
    profilePic: "https://i.pravatar.cc/150?img=3",
    name: "Anthony",
    amount: 0,
  },
];

function App() {
  const [selectedPersonId, setSelectedPersonId] = useState("");
  const [friends, setFriends] = useState(friendsData);

  function handleFriends(id, newAmount) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === id
          ? { ...friend, amount: friend.amount + newAmount }
          : friend
      )
    );
  }

  let selectedPerson = friends.find((friend) => friend.id === selectedPersonId);

  return (
    <div className={`app ${selectedPerson ? "selected" : ""}`}>
      <Friends
        selectedPersonId={selectedPersonId}
        setSelectedPersonId={setSelectedPersonId}
        setFriends={setFriends}
        friends={friends}
      />
      <BillSplitter
        selectedPerson={selectedPerson}
        onHandleFriends={handleFriends}
        selectedPersonId={selectedPersonId}
      />
    </div>
  );
}

export default App;
