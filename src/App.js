import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <Topbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
