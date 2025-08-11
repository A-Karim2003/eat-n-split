import Button from "../../components/Button";

function Friend() {
  return (
    <div className="friend">
      <div className="profile-pic">
        <img src="https://i.pravatar.cc/150?u=anything" alt="Random" />
      </div>
      <div className="profile-info">
        <h2>Clark</h2>
        <p>You owe Clark £7</p>
      </div>
      <Button className={"close-btn"}>Close</Button>
    </div>
  );
}

export default Friend;
