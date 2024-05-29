import "./App.css";
import UserCard from "./components/UserCard";
import UserProfile from "./components/UserProfile";

function App() {
  const aliceDetails = {
    name: "Alice",
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie porta nisl, sit amet gravida ipsum laoreet quis. Phasellus enim mi, lacinia eget tellus vitae.",
    avatar_url: "/images/Alice.jpg",
  };
  const rockyDetails = {
    name: "Rocky",
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie porta nisl, sit amet gravida ipsum laoreet quis. Phasellus enim mi, lacinia eget tellus vitae.",
    avatar_url: "/images/Rocky.jpg",
  };
  return (
    <div className="App">
      <div className="header">
        <h1 className="play-regular whiteColor">PROFILES</h1>
      </div>
      <div className="mainContent">
        <UserProfile
          user={aliceDetails}
          render={(data) => <UserCard bio={data} />}
        />
        <UserProfile
          user={rockyDetails}
          render={(data) => <UserCard bio={data} />}
        />  
      </div>
    </div>
  );
}

export default App;
