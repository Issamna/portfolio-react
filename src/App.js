import "./style.css";
import Navbar from "./components/Navbar";
import Top from "./components/Top";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Top />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
