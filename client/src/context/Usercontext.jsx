import { createContext, useState } from 'react'

export const UserContex = createContext({});

export function UserContexProvider({children}){
    const [selection, setSelection] = useState();
    return (
    <UserContex.Provider value={{selection, setSelection}}>
        {children}
    </UserContex.Provider>    
    );
}