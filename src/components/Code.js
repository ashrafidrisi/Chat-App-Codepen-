import Editor from "./Editor";
import { useContext } from "react";
import {Box, styled} from '@mui/material';
import { DataContest } from "../context/DataProvider";

const Container = styled(Box)`
  display:flex;
  background: #060606;
  height: 59vh;
`
const Code = () => {

  const {html,setHtml,css,setCss,js,setJs} = useContext(DataContest);
  return (
    <Container>
      <Editor 
       heading="HTML"
       icon="/"
        color="#FF3C41"
        value={html}
        onchange={setHtml}
        ></Editor>
      <Editor  
      heading="CSS" 
       icon="*"
        color="#0EBEFF"
        value={css}
        onchange={setCss}
        ></Editor>
      <Editor
       heading="JavaScript"
        icon="{}"
         color="#FCD000"
         value={js}
        onchange={setJs}
         ></Editor>
    </Container>
  );
};
export default Code;
