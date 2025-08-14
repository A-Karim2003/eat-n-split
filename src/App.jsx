import { useState } from "react";
import BillSplitter from "./components/BillSplitter/BillSplitter.jsx";
import Friends from "./components/Friends/Friends.jsx";

const friendsData = [
  {
    id: 1,
    profilePic: "https://i.pravatar.cc/150?img=12",
    name: "Clark",
    amount: 7,
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

  const selectedPerson = friendsData.find(
    (friend) => friend.id === selectedPersonId
  );

  return (
    <div className={`app ${selectedPerson ? "selected" : ""}`}>
      <Friends
        friendsData={friendsData}
        selectedPersonId={selectedPersonId}
        setSelectedPersonId={setSelectedPersonId}
      />
      <BillSplitter selectedPerson={selectedPerson} />
    </div>
  );
}

export default App;
