import { AiOutlineFile } from "react-icons/ai";
import styled from "styled-components";
import FILE_ICONS from "./File_Icons";

const StyledFile = styled.div`
  padding-left: 20px;
  
  background-color: grey;
  display: flex;
  align-items: center;
  span {
    
    margin-left: 5px;
  }
`;

const File = ({ name }) => {
  let ext = name.split(".")[1];

  return (
    <StyledFile>
      {/* render the extension or fallback to generic file icon  */}
      {FILE_ICONS[ext] || <AiOutlineFile />}
      <span>{name}</span>
    </StyledFile>
  );
};

export default File;