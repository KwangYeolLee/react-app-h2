import { BrowserRouter } from "react-router";
import "./App.css";
import RoutesSetup from "./routes/RoutesSetup";
function App() {
  return (
    <BrowserRouter>
      <RoutesSetup />
    </BrowserRouter>
  );
}
export default App;
