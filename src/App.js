import './App.scss';
import Contents from "./components/contents";
import Welcome from "./components/welcome";
import TopBar from './components/top-bar';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="banner">
          <div className="top-bar">
              <TopBar />
          </div>
          <Welcome />
        </div>
        <div className="content">
          <Contents />
        </div>
      </div>
    </div>
  );
}

export default App;
