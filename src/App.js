import "./App.css";
import Profile from "./profile/Profile";
import pic from "./pic.jpeg";

function App() {

  function myName(name) {
    alert(`${name}`);
  }

  return (
    <div className="App">
      <div className="header-App">
        <Profile
          name="Hasnaoui Jihen"
          bio="Data scientist + web developer"
          profession=" web Developer"
          myName={myName}
        >
          <img src={pic} alt="pic" width={300} />
        </Profile>
      </div>
    </div>
  );
}

export default App;
