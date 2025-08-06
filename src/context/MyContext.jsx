import { createContext, useState } from "react";

 export const MyNote = createContext()

 export const MyContext = ({children}) => {
     const [formData, setFormData] = useState([])

 const DeleteNote = (id) => {
    setFormData(formData.filter((data) => data.id !== id))
}

    return (
        <MyNote.Provider value={{formData, setFormData,DeleteNote}}>
            {children}
        </MyNote.Provider>
    )
 }

