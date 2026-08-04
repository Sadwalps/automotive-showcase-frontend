import { createContext, useEffect, useState } from "react";
import { addlikedcarApi, getallcardetailsApi, getlikedcarApi, removelikedcarApi } from "../service/allApi";

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

    // const [cars, setCars] = useState([])
    // const fetchCars = async () => {
    //     try {
    //         const response = await getallcardetailsApi();
    //         if (response.status === 200) {
    //             setCars(response.data);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     fetchCars()
    // }, [])



    // const likeCar = async (carId) => {
    //     try {
    //         const response = await updatecarApi(carId, { isLiked: true });
    //         if (response.status === 200) {
    //             setCars(prevCars => prevCars.map(car.id === carId ? { ...car, isLiked: true } : car))
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const [likedcars, setLikedcars] = useState([]);

    //fetch all liked cars from the api
    const fetchLikedCars = async () => {
        try {
            const result = await getlikedcarApi()
            if (result.status === 200) {
                setLikedcars(result.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchLikedCars();
    }, [])

    // save liked car (if not already liked)
    const saveLikedCar = async (car) => {
        const isAlreadyLiked = likedcars.some((item) => item.name === car.name)

        if (!isAlreadyLiked) {
            try {
                const result = await addlikedcarApi(car);
                if (result.status === 201 || result.status === 200) {
                    setLikedcars((prev) => [...prev, result.data]);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    //remove liked car by id
    const removeLikedCar = async (id) => {
        try {
            const result = await removelikedcarApi(id);
            if (result.status === 200 || result.status === 204) {
                setLikedcars((prev) => prev.filter((item) => item.id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <loginResponseContext.Provider value={{ loginResponse, setLoginResponse }}>
            <editResponseContext.Provider value={{ editResponse, setEditResponse }}>
                <carContext.Provider value={{ likedcars, setLikedcars, saveLikedCar, removeLikedCar }}>
                    {children}
                </carContext.Provider>
            </editResponseContext.Provider>
        </loginResponseContext.Provider>
    )
}

export default ContextShare