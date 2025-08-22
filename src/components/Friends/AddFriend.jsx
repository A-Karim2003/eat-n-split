import InputGroup from "../InputGroup";
import Button from "../Button";
import { useState } from "react";

function AddFriend({ addFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  console.log(name, image);

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

  return (
    <div className="add-friend">
      <InputGroup>
        <div>👫 Friend name</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputGroup>

      <InputGroup>
        <div>🌄 Image URL</div>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </InputGroup>

      <Button
        className={"right"}
        onClick={() => {
          if (validateInputs()) {
            addFriend(name);
            setName("");
            setImage("");
          }
        }}
      >
        Add
      </Button>
    </div>
  );
}

export default AddFriend;
