import { createContext, useState } from "react";

export const loginResponseContext = createContext({})

function ContextShare({ children }) {
    const [loginResponse, setLoginResponse] = useState(() => {
        const adminData = sessionStorage.getItem('admin');
        const userData = sessionStorage.getItem('user')
        return (adminData || userData) ? true : false;
    })


    return (
        <loginResponseContext.Provider value={{ loginResponse, setLoginResponse }}>
            {children}
        </loginResponseContext.Provider>
    )
}

export default ContextShare