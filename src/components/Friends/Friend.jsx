import Button from "../../components/Button";

function Friend({ id, profilePic, name, amount }) {
  return (
    <div className="friend">
      <div className="profile-pic">
        <img src={profilePic} alt="Random" />
      </div>
      <div className="profile-info">
        <h2>{name}</h2>
        <p>
          You owe {name} £{amount}
        </p>
      </div>
      <Button className={"close-btn"}>Close</Button>
    </div>
  );
}

export default Friend;
