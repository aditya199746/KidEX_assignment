
import Tree from "./components/Tree";
import structure from "./TreeStructure.js";
import "./styles.css";


export default function App() {
  
  return (
    <div >
      <Tree data={structure} />
    </div>
  );
}
