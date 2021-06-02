
import Tree from "./components/Tree";
import structure from "./TreeStructure.js";
import "./styles.css";


export default function App() {
  
  return (
    <div className="App">
      <Tree data={structure} />
    </div>
  );
}
