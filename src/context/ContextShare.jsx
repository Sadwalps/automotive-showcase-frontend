import { createContext, useState } from "react";

export const loginResponseContext = createContext({})
export const editResponseContext = createContext({})

function ContextShare({ children }) {
    const [loginResponse, setLoginResponse] = useState(() => {
        const adminData = sessionStorage.getItem('admin');
        const userData = sessionStorage.getItem('user')
        return (adminData || userData) ? true : false;
    })

    const [editResponse, setEditResponse] = useState([])

    return (
        <loginResponseContext.Provider value={{ loginResponse, setLoginResponse }}>
            <editResponseContext.Provider value={{ editResponse, setEditResponse }}>
                {children}
            </editResponseContext.Provider>
        </loginResponseContext.Provider>
    )
}

export default ContextShare