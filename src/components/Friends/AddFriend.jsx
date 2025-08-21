import InputGroup from "../InputGroup";

import Button from "../Button";
function AddFriend() {
  return (
    <div className="add-friend">
      <InputGroup>
        <div>👫 Friend name</div>
        <input type="text" />
      </InputGroup>

      <InputGroup>
        <div>🌄 Image URL</div>
        <input type="text" />
      </InputGroup>

      <Button className={"right"}>Add</Button>
    </div>
  );
}

export default AddFriend;
