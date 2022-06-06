import Routes from "./Routes/Routes";
import { authContext } from "./context/Auth-context";
import { useContext } from "react";
function App() {
  const authCTX = useContext(authContext);
  console.log("this is context : ", authCTX);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
