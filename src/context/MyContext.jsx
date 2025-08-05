import { createContext, useState } from "react";

 export const MyNote = createContext()

 export const MyContext = ({children}) => {
     const [formData, setFormData] = useState([])
    return (
        <MyNote.Provider value={{formData, setFormData}}>
            {children}
        </MyNote.Provider>
    )
 }

