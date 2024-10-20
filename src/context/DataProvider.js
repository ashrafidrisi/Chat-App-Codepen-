import { createContext, useState } from "react";

export const DataContest = createContext();

const DataProvider = ({children})=>{
  const[html, setHtml] = useState('');
  const[css, setCss] = useState('');
  const[js, setJs] = useState('');

    return(
        <DataContest.Provider
        value={{
          
          html,
          setHtml,
          css,
          setCss,
          js,
          setJs

             }}
        >

       {children}

        </DataContest.Provider>
    )
}
export default DataProvider;