import Routes from "./Routes/Routes";
import { authContext } from "./context/Auth-context";
import { useContext } from "react";
function App() {
  const authCTX = useContext(authContext);
  return (
    <div className="row w-100" dir="rtl">
      <Routes />
    </div>
  );
}

export default App;
