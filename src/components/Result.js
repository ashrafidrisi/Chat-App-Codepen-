import { useContext, useState, useEffect } from 'react';

import { Box, styled} from '@mui/material';

import { DataContest } from '../context/DataProvider';

 const Container =styled(Box)`
  height:41vh;
 `

 const Result = ()=> {
     const [src, setSrc] = useState('');
    const {html, css, js} = useContext(DataContest);
   const srcCode = `
     <html>
     <body>${html}</body>
     <style>${css}</style>
     <script>${js}</script>
     
     </html>
   ` 
   useEffect(()=> {
     const timeout = setTimeout(()=>{
       setSrc(srcCode);
      } , 1000)

      return() => clearTimeout(timeout);
   }, [html,css,js])

    return(
     <Container>
        <iframe
        srcDoc = {src}
        title = "Output"
        sandbox='allow-scripts'
        width="100%"
        height="100%"
        />
     </Container>
    )
 }
 export default Result;