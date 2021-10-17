import './App.css';

import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app__container">
      <div>
        <Sidebar />
      </div>
      <div>
        <Feed />
      </div>
    </div>
  );
}

export default App;
