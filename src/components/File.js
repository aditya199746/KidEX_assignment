import { AiOutlineFile } from "react-icons/ai";
import styled from "styled-components";
import FILE_ICONS from "./File_Icons";

const StyledFile = styled.div`
  padding-left: 20px;
  marginTop:"5px"
  
  display: flex;
  align-items: center;
  span {
    background-color: grey;
    margin-left: 5px;
  }
`;

const File = ({ name }) => {
  let ext = name.split(".")[1];

  return (
    <StyledFile style={{marginTop:"5px"}}>
      {/* render the extension or fallback to generic file icon  */}
      {FILE_ICONS[ext] || <AiOutlineFile />}
      <span >{name}</span>
    </StyledFile>
  );
};

export default File;