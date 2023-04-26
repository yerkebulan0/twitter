import "./App.css";
import Sidemenu from "./sidemenu/sidemenu";
import Homemenu from "./homemenu/home";

function App() {

  return (
    <div className="App" >
      <Sidemenu />

      <div className="vertical"></div>
      <Homemenu />
      <div className="vertical"></div>
    </div>
  );
}

export default App;
