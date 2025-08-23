import InputGroup from "../InputGroup";
import Button from "../Button";

function AddFriend({
  onHandleAddFriend,
  setName,
  name,
  setImage,
  image,
  addSection,
}) {
  if (!addSection) return;
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

      <Button className={"right"} onClick={onHandleAddFriend}>
        Add
      </Button>
    </div>
  );
}

export default AddFriend;
