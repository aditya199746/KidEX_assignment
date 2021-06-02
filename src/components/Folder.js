import styled from "styled-components";
import {  AiOutlineFolder } from "react-icons/ai";
import {useState} from "react";
import "../index.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const StyledFolder = styled.div`
  padding-left: 20px;

  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

const Collapsible = styled.div`
  height: ${p => (p.isOpen ? "auto" : "0")};
  overflow: hidden;
`;

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive,setIsActive]= useState(true);

  const handleToggle = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
    isActive ? setIsActive(false) : setIsActive(true);

  };
return (
    <StyledFolder>
      <div className="folder--label" className={isActive ? "caret" : "caret-down"} onClick={handleToggle}>
        <AiOutlineFolder style={{color:"blue", fontSize:"xx-large" }} />
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};
  export default Folder;