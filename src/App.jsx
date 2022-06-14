import Routes from "./Routes";
import { themeContext } from "./context/Theme-context";
import { useContext } from "react";
function App() {
  const { theme } = useContext(themeContext);
  return (
    <div className="row w-100" dir="rtl" id={theme}>
      <Routes />
    </div>
  );
}

export default App;
