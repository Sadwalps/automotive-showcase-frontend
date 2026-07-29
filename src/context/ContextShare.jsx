import { createContext, useEffect, useState } from "react";
import { getallcardetailsApi, updatecarApi } from "../service/allApi";

export const loginResponseContext = createContext({})
export const editResponseContext = createContext({})
export const carContext = createContext();

function ContextShare({ children }) {
    const [loginResponse, setLoginResponse] = useState(() => {
        const adminData = sessionStorage.getItem('admin');
        const userData = sessionStorage.getItem('user')
        return (adminData || userData) ? true : false;
    })

    const [editResponse, setEditResponse] = useState([])
    
    const [cars, setCars] = useState([])
    const fetchCars = async () => {
        try {
            const response = await getallcardetailsApi();
            if (response.status === 200) {
                setCars(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCars()
    }, [])

    const likeCar = async (carId) => {
        try {
            const response = await updatecarApi(carId, { isLiked: true });
            if (response.status === 200) {
                setCars(prevCars => prevCars.map(car.id === carId ? { ...car, isLiked: true } : car))
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <loginResponseContext.Provider value={{ loginResponse, setLoginResponse }}>
            <editResponseContext.Provider value={{ editResponse, setEditResponse }}>
                <carContext.Provider value={{ cars, setCars, likeCar }}>
                    {children}
                </carContext.Provider>
            </editResponseContext.Provider>
        </loginResponseContext.Provider>
    )
}

export default ContextShare